import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import CharacterCard from './CharacterCard';
import Styles from '../styles/styles';

/** Component to display a favorite item with drag-and-drop functionality.
 * @param {Object} props - The component props.
 * @param {Object} props.item - The favorite item data.
 * @param {Function} props.drag - The function to initiate dragging.
 * @param {boolean} props.isActive - Indicates if the item is currently being dragged.
 * @returns {JSX.Element} The rendered favorite item component.
 */
export default function FavoriteItem({ item, drag, isActive }) {
    return (
        <View style={[Styles.row, isActive && Styles.active]}>
            <IconButton icon="drag" onPressIn={drag} style={Styles.dragIcon} />
            <View style={{ flex: 1 }}>
                <CharacterCard item={item} />
            </View>
        </View>
    );
}