import { View, Text, Button } from 'react-native';

//Recebemos com props o navigation para podermos navegar entre as telas
const Home = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: '#d5edb9'
        }}>
            <Text style={{ fontSize: 30 }}>Tela Principal</Text>
            <Button title="Tela de Cadastro" onPress={() => navigation.navigate('Cadastro')} />
            <Button title="Tela de Relatório" onPress={() => navigation.navigate('Relatorio')} />
            <Button title="Tela de Gráficos" onPress={() => navigation.navigate('Graficos')} />
            
        </View>
    )
};

export default Home;