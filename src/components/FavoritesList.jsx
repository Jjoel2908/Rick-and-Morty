import React from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';
import FavoriteItem from './FavoriteItem';

/** Component to display a list of favorite items with drag-and-drop reordering functionality.
 * @param {Object} props - The component props.
 * @param {Array} props.data - The array of favorite items to display.
 * @param {Function} props.onReorder - The function to call when the list is reordered.
 * @returns {JSX.Element} The rendered favorites list component.
 */
export default function FavoritesList({ data, onReorder }) {
    const keyExtractor = (item) => item.id;

    const renderItem = ({ item, drag, isActive }) => (
        <FavoriteItem item={item} drag={drag} isActive={isActive} />
    );

    return (
        <DraggableFlatList
            data={data}
            keyExtractor={keyExtractor}
            onDragEnd={({ data }) => onReorder(data)}
            renderItem={renderItem}
            contentContainerStyle={{ paddingVertical: 8 }}
        />
    );
}