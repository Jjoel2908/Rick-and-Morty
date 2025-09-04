import { View } from 'react-native';
import { Text } from 'react-native-paper';

/** Component to display character information. */
export default CharacterInfo = ({ name, gender, status }) => (
    <View style={styles.infoContainer}>
        <Text variant="titleMedium">{name}</Text>
        <Text variant="bodyMedium">Género: {gender}</Text>
        <Text variant="bodyMedium">Estado: {status}</Text>
    </View>
);