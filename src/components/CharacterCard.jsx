import React, { memo } from 'react';
import { View, Image } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { useFavorites } from '../state/favorites';
import Styles from '../styles/styles';
import CharacterInfo from './CharacterInfo';

/** Component to display a character card with favorite functionality.
 * @param {Object} item - The character data object.
 * @returns {JSX.Element} The rendered character card component.
 */
const CharacterCard = ({ item }) => {
    const addFavorite = useFavorites((s) => s.addFavorite);
    const removeFavorite = useFavorites((s) => s.removeFavorite);
    const isFav = useFavorites((s) => s.isFavorite(item.id));

    const toggleFavorite = () => {
        isFav ? removeFavorite(item.id) : addFavorite(item);
    };

    return (
        <Card style={Styles.card}>
            <View style={Styles.row}>
                <Image source={{ uri: item.image }} style={Styles.image} resizeMode="cover" />
                <CharacterInfo name={item.name} gender={item.gender} status={item.status} />
                <IconButton
                    icon={isFav ? 'heart' : 'heart-outline'}
                    onPress={toggleFavorite}
                    style={Styles.iconButton}
                />
            </View>
        </Card>
    );
};

export default memo(CharacterCard);