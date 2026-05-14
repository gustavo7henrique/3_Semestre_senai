import { View, Text, Button } from 'react-native';

//Recebemos com props o navigation para podermos navegar entre as telas
const Relatorio = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: '#c4bdf3'
        }}>
            <Text style={{ fontSize: 30 }}>Tela de Relatório</Text>
            <Button title="Tela de Cadastro" onPress={() => navigation.navigate('Cadastro')} />
            <Button title="Tela de Gráficos" onPress={() => navigation.navigate('Graficos')} />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
};

export default Relatorio;