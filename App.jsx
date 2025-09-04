import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './src/apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharactersScreen from './src/screens/CharactersScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsers, faHeart } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <PaperProvider>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            headerShown: true,
                            tabBarIcon: ({ size, color }) => {
                                let icon;
                                if (route.name === 'Personajes') {
                                    icon = faUsers;
                                } else {
                                    icon = faHeart;
                                }
                                return <FontAwesomeIcon icon={icon} size={size} color={color} />;
                            },
                        })}
                    >
                        <Tab.Screen name="Personajes" component={CharactersScreen} />
                        <Tab.Screen name="Favoritos" component={FavoritesScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </ApolloProvider>
    );
}