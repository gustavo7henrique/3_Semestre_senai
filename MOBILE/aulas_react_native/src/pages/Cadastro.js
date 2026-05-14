import { View, Text, Button } from 'react-native';

//Recebemos com props o navigation para podermos navegar entre as telas
const Cadastro = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: '#a5e1e9'
        }}>
            <Text style={{ fontSize: 30 }}>Tela de Cadastro</Text>
            <Button title="Tela de Relatório" onPress={() => navigation.navigate('Relatorio')} />
            <Button title="Tela de Gráficos" onPress={() => navigation.navigate('Graficos')} />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
};

export default Cadastro;