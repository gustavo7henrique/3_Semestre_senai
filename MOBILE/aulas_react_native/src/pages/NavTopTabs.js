import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Importando Rotas
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Graficos from './Graficos';
import Login from './Login';
import NavDrawer from './NavDrawer';

//Criando nossa constante que cria o estilo de navegação em Stack
const Tab = createMaterialTopTabNavigator();

const NavTopTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Login'>

                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Cadastro" component={Cadastro} />
                <Tab.Screen name="Relatorio" component={Relatorio} />
                <Tab.Screen name="Graficos" component={Graficos} />
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="MenuPrincipal" component={NavDrawer} options={{headerShown: false}} />

            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default NavTopTabs;

