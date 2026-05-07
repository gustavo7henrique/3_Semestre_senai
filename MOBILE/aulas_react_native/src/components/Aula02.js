import { View, Text, Image, TextInput } from "react-native";
import { useState } from "react";
import Logo from '../assets/logo.png'
import { Button } from "react-native-web";
import Hr from "./Hr";

const Aula02 = () => {

    const [nome, setNome] = useState();

    return (
        <View style={{ width: '100%' }}>
            <Hr />
            <Text>Aula 02 - Componentes Básicos</Text>
            <Text>Conhecendo os principais componentes do React Native</Text>

            {/* Inserindo imagem da internet */}
            <Image
                source={{ uri: 'https://quatrorodas.abril.com.br/wp-content/uploads/2021/05/Gurgel-Itaipu-testado-por-QUATRO-RODAS-em-2007-6-destaque.jpg?crop=1&resize=1212,909' }}
                style={{ width: 300, height: 200 }} />

            <Image
                source={require('../assets/logo.png')}
                style={{ width: 50, height: 50 }} />

            <Image
                source={Logo}
                style={{ width: 50, height: 50 }} />

            <TextInput
                placeholder="Digite seu Nome"
                //Não preciso de arrow function
                onChangeText={setNome}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />

            <Text>Seu nome é: {nome}</Text>

            <Button title="Clique aqui"
                onPress={() => console.log(`Bem vindo ${nome}`)}
            />

        </View>
    )
};

export default Aula02;