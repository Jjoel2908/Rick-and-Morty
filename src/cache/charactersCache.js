import AsyncStorage from '@react-native-async-storage/async-storage';

/** Key to store the first page of characters */
const KEY = 'cache:characters:page1';

/** Save the first page of characters to AsyncStorage */
export const saveCharactersPage1 = async (list) => {
    try {
        await AsyncStorage.setItem(KEY, JSON.stringify(list));
    } catch (e) { }
};

/** Read the first page of characters from AsyncStorage */
export const readCharactersPage1 = async () => {
    try {
        const v = await AsyncStorage.getItem(KEY);
        return v ? JSON.parse(v) : null;
    } catch (e) {
        return null;
    }
};
