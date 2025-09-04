import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import CharacterCard from './CharacterCard';

/** Component to display a list of characters with infinite scrolling and pull-to-refresh functionality.
 * @param {Object} props - The component props.
 * @param {Array} props.items - The array of character items to display.
 * @param {number|null} props.nextPage - The next page number for pagination, or null if there are no more pages.
 * @param {Function} props.fetchMore - The function to fetch more characters for pagination.
 * @param {Function} props.refetch - The function to refetch the character list.
 * @returns {JSX.Element} The rendered characters list component.
 */
export default function CharactersList({ items, nextPage, fetchMore, refetch }) {
    const [refreshing, setRefreshing] = useState(false);

    const loadMore = useCallback(() => {
        if (!nextPage) return;
        fetchMore({
            variables: { page: nextPage },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return {
                    characters: {
                        ...fetchMoreResult.characters,
                        results: [...prev.characters.results, ...fetchMoreResult.characters.results],
                    },
                };
            },
        });
    }, [nextPage, fetchMore]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
            await refetch();
        } finally {
            setRefreshing(false);
        }
    }, [refetch]);

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CharacterCard item={item} />}
            onEndReached={loadMore}
            onEndReachedThreshold={0.4}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            contentContainerStyle={{ paddingVertical: 8 }}
        />
    );
}