import React from 'react';
import { View } from 'react-native';
import { useFavorites } from '../state/favorites';
import EmptyFavorites from '../components/EmptyFavorites';
import FavoritesList from '../components/FavoritesList';

/** Screen to display the list of favorite items or an empty state if no favorites exist.
 * @returns {JSX.Element} The rendered favorites screen component.
 */
export default function FavoritesScreen() {
    const favorites = useFavorites((s) => s.favorites);
    const reorder = useFavorites((s) => s.reorder);

    return (
        <View style={{ flex: 1 }}>
            {favorites.length === 0 ? (
                <EmptyFavorites />
            ) : (
                <FavoritesList data={favorites} onReorder={reorder} />
            )}
        </View>
    );
}