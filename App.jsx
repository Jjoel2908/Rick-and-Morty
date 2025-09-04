import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { HandlerNavigation } from './src/navigation/HandlerNavigation';
import { AuthProvider } from './src/context/AuthContext';
import { colorLidos } from './src/constants/Colors';
import { StripeProvider } from '@stripe/stripe-react-native';
import { PUBLISHSABLE_STRIPE_KEY } from '@env';
import { LidosProvider } from './src/context/DataContext';
import { GOOGLE_KEY } from '@env';
import Geocoder from 'react-native-geocoding';
import Toast from 'react-native-toast-message';

/** Inicializamos Geocoder */
Geocoder.init(GOOGLE_KEY);

/** Componente principal de la aplicación */
const App = () => {
    return (
        <>
            {/* Configuración global del StatusBar */}
            <StatusBar
                barStyle="dark-content"   // Estilo del texto (claro sobre fondo oscuro)
                backgroundColor={colorLidos}  // Color de fondo del estatus bar
                translucent={false}        // Establece si el estatus bar será translúcido
            />

            {/* SafeAreaView para asegurar que el contenido no se superponga */}
            <SafeAreaView style={{ flex: 1, backgroundColor: colorLidos }}>

                {/* Proveedor de Stripe para Pasarela de Pago */}
                <StripeProvider publishableKey={PUBLISHSABLE_STRIPE_KEY}>

                    {/* Contenedor de navegación */}
                    <NavigationContainer>

                        {/* Proveedor de datos de la aplicación */}
                        <LidosProvider>

                            {/* Proveedor de autenticación */}
                            <AuthProvider>

                                {/* Componente de navegación */}
                                <HandlerNavigation />

                            </AuthProvider>

                        </LidosProvider>

                    </NavigationContainer>

                </StripeProvider>

            </SafeAreaView>

            {/* Componente de Toast para mostrar mensajes emergentes */}
            <Toast />
        </>
    );
}

export default App;