import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Cadastro from './src/Pages/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Pages/Login';
import Senha from './src/Pages/EsqueciASenha';
import Home from './src/Pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerRight: () => (
            <Image
              source={require('./assets/logo.png')}
              style={{
                width: 300, // aumente o tamanho aqui
                height: 50,
                marginRight: -50, 
                resizeMode: 'cover',

              }}
            />
          ),
          headerTitle: '', // remove o título do meio
          headerStyle: {
            elevation: 0, // Android
            shadowOpacity: 0, // iOS
            borderBottomWidth: 0, // segurança extra
          },
        }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name='EsqueciASenha' component={Senha} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
