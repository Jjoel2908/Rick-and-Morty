import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';
import { saveCharactersPage1, readCharactersPage1 } from '../cache/charactersCache';
import LoadingView from '../components/LoadingView';
import ErrorView from '../components/ErrorView';
import CharactersList from '../components/CharactersList';

/** Screen component to display a list of characters from the Rick and Morty API with caching for offline access.
 * @returns {JSX.Element} The rendered characters screen component.
 */
export default function CharactersScreen() {
    const { data, loading, error, fetchMore, refetch } = useQuery(GET_CHARACTERS, {
        variables: { page: 1 },
        notifyOnNetworkStatusChange: true,
    });

    const [fallback, setFallback] = useState(null);

    useEffect(() => {
        const list = data?.characters?.results;
        if (list && list.length) saveCharactersPage1(list);
    }, [data]);

    useEffect(() => {
        if (error && !data) {
            readCharactersPage1().then((cached) => setFallback(cached));
        }
    }, [error, data]);

    const items = data?.characters?.results || fallback || [];
    const nextPage = data?.characters?.info?.next;

    if (loading && !items.length) {
        return <LoadingView />;
    }

    if (error && !items.length) {
        return <ErrorView />;
    }

    return (
        <CharactersList
            items={items}
            nextPage={nextPage}
            fetchMore={fetchMore}
            refetch={refetch}
        />
    );
}