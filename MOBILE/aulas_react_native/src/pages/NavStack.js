import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//Importando Rotas
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Graficos from './Graficos';
import Login from './Login';
import NavDrawer from './NavDrawer';

//Criando nossa constante que cria o estilo de navegação em Stack
const Stack = createNativeStackNavigator();

const NavStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Relatorio" component={Relatorio} />
                <Stack.Screen name="Graficos" component={Graficos} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="MenuPrincipal" component={NavDrawer} options={{headerShown: false}} />

            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default NavStack;

