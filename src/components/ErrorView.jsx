import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Styles from '../styles/styles';

/** Component to display an error view with a message indicating no connection or API error.
 * @returns {JSX.Element} The rendered error view component.
 */
export default function ErrorView() {
    return (
        <View style={Styles.containerErrorView}>
            <Text style={Styles.containerDetailView}>
                Sin conexión o error en la API
            </Text>
            <Text style={Styles.textErrorView}>
                Mostraremos el último listado guardado cuando esté disponible.
            </Text>
        </View>
    );
}