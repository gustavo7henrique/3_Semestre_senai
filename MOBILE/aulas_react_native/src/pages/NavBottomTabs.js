import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

//Importando Rotas
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Graficos from './Graficos';

//Criando nossa constante que cria o estilo de navegação em Stack
const BottomTab = createBottomTabNavigator();

const NavBottomTabs = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator>

                <BottomTab.Screen name="Home" component={Home} 
                    options={{
                        tabBarIcon: ({ size, color }) => <MaterialIcons name="home" size={size} color={color} />
                    }}
                />

                <BottomTab.Screen name="Cadastro" component={Cadastro}
                    options={{
                        tabBarIcon: ({ size, color }) => <MaterialIcons name="login" size={size} color={color} />
                    }}
                />
                <BottomTab.Screen name="Relatorio" component={Relatorio} 
                    options={{
                        tabBarIcon: ({ size, color }) => <MaterialIcons name="bar-chart" size={size} color={color} />
                    }}
                />
                <BottomTab.Screen name="Graficos" component={Graficos}  
                    options={{
                        tabBarIcon: ({ size, color }) => <MaterialIcons name="pie-chart" size={size} color={color} />
                    }}
                />

            </BottomTab.Navigator>
        </NavigationContainer>
    )
};

export default NavBottomTabs;

