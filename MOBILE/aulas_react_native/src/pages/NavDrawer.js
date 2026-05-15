import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//Importando Rotas
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Graficos from './Graficos';

//Importando Aulas
import Aula01 from '../components/Aula01';
import Aula02 from '../components/Aula02';
import Aula03 from '../components/Aula03';
import Aula04 from '../components/Aula04';
import Aula05 from '../components/Aula05';
import Aula06 from '../components/Aula06';
import Aula07 from '../components/Aula07';

//Criando nossa constante que cria o estilo de navegação em Drawer
const Drawer = createDrawerNavigator();

const NavDrawer = () => {
    return (
        // <NavigationContainer>
            <Drawer.Navigator
                initialRouteName='Home'
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#fff',
                        width: 240
                    },
                    drawerLabelStyle: {
                        fontSize: 16
                    },
                    drawerActiveBackgroundColor: '#e9e9e9',
                    drawerActiveTintColor: '#000',
                    drawerInactiveTintColor: '#333'
                }}
            >
                <Drawer.Screen name="Home" component={Home} 
                     options={{
                        title: 'Tela Principal',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="home" size={size} color={color} />  
                    }}
                />

                <Drawer.Screen name="Cadastro" component={Cadastro} 
                     options={{
                        title: 'Cadastro',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="login" size={size} color={color} />  
                    }}
                />

                <Drawer.Screen name="Relatorio" component={Relatorio} 
                    options={{
                        title: 'Relatório',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="bar-chart" size={size} color={color} />  
                    }}
                />

                <Drawer.Screen name="Graficos" component={Graficos}
                    options={{
                        title: 'Gráficos',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="pie-chart" size={size} color={color} />  
                    }}
                />

                <Drawer.Screen name="Aula 01" component={Aula01} 
                    options={{
                        drawerIcon: ({ size, color }) => <MaterialIcons name="class" size={size} color={color} />
                    }}
                />

                <Drawer.Screen name="Aula 02" component={Aula02} 
                    options={{
                        drawerIcon: ({ size, color }) => <MaterialIcons name="class" size={size} color={color} />
                    }}
                />

                <Drawer.Screen name="Aula 03" component={Aula03} 
                    options={{
                        drawerIcon: ({ size, color }) => <MaterialIcons name="class" size={size} color={color} />
                    }}
                />

                <Drawer.Screen name="Aula 04" component={Aula04}
                    options={{
                        drawerIcon: ({ size, color }) => <MaterialIcons name="class" size={size} color={color} />
                    }}
                />

                <Drawer.Screen name="Aula 05" component={Aula05} 
                    options={{
                        drawerIcon: ({ size, color }) => <MaterialIcons name="class" size={size} color={color} />
                    }}
                />

                <Drawer.Screen name="Aula 06" component={Aula06} 
                    options={{
                        drawerIcon: ({ size, color }) => <MaterialIcons name="class" size={size} color={color} />
                    }}
                />

                <Drawer.Screen name="Aula 07" component={Aula07} 
                    options={{
                        drawerIcon: ({ size, color }) => <MaterialIcons name="class" size={size} color={color} />
                    }}
                />

            </Drawer.Navigator>
        // </NavigationContainer>
    )
};

export default NavDrawer;

