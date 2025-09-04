import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Styles from '../styles/styles';

/** Component to display a message when there are no favorite characters.
 * @returns {JSX.Element} The rendered empty favorites message component.
 */
export default function EmptyFavorites() {
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>No tienes favoritos todavía</Text>
            <Text style={Styles.subtitle}>Toca el corazón en cualquier personaje para agregarlo (máx. 5).</Text>
        </View>
    );
}