import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//Importando Rotas
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Graficos from './Graficos';

//Criando nossa constante que cria o estilo de navegação em Drawer
const Drawer = createDrawerNavigator();

const NavDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName='Home'
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#c6cbec',
                        width: 240
                    },
                    drawerLabelStyle: {
                        fontSize: 18
                    },
                    drawerActiveBackgroundColor: '#e9e9e9',
                    drawerActiveTintColor: '#000',
                    drawerInactiveTintColor: '#333'
                }}
            >
                <Drawer.Screen name="Home" component={Home} 
                     options={{
                        title: 'Relatório',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="home" size={size} color={color} />  
                    }}
                />

                <Drawer.Screen name="Cadastro" component={Cadastro} 
                     options={{
                        title: 'Relatório',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="login" size={size} color={color} />  
                    }}
                />

                <Drawer.Screen name="Relatorio" component={Relatorio} 
                    options={{
                        title: 'Relatório',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="report" size={size} color={color} />  
                    }}
                />

                <Drawer.Screen name="Graficos" component={Graficos}
                    options={{
                        title: 'Gráficos',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="pie-chart" size={size} color={color} />  
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

export default NavDrawer;

