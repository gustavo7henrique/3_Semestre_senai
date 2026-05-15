import { View, Text, Button } from 'react-native';
import * as Animar from 'react-native-animatable';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//Recebemos com props o navigation para podermos navegar entre as telas
const Login = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: '#a5e1e9'
        }}>
            <Text style={{ fontSize: 30 }}>Tela de Login</Text>
            <Button title="Menu Principal" onPress={() => navigation.navigate('MenuPrincipal')} />

        </View>
    )
};

export default Login;