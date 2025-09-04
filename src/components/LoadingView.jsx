import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import Styles from '../styles/styles';

/** Component to display a loading view with an activity indicator and message.
 * @returns {JSX.Element} The rendered loading view component.
 */
export default function LoadingView() {
    return (
        <View style={Styles.containerLoanView}>
            <ActivityIndicator />
            <Text>Cargando personajes…</Text>
        </View>
    );
}