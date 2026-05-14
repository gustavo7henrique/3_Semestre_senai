import { View, Text, Button } from 'react-native';

//Recebemos com props o navigation para podermos navegar entre as telas
const Graficos = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: '#f3c4c4'
        }}>
            <Text style={{ fontSize: 30 }}>Tela de Gráficos</Text>
            <Button title="Tela de Cadastro" onPress={() => navigation.navigate('Cadastro')} />
            <Button title="Tela de Relatório" onPress={() => navigation.navigate('Relatorio')} />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
};

export default Graficos;