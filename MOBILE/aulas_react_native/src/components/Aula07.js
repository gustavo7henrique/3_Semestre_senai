import { View, Text, FlatList } from "react-native-web";
import * as Animar from 'react-native-animatable';
import Hr from "./Hr";

const Aula07 = () => {

    return (
        <View>
            <Hr />
            <Text>Aula 07 - Estilos de navegação Tabs e Animações</Text>
            <Text>Criando navegação do tipo Abas e aprendendo sobre animações</Text>
            <Hr />
            <Animar.Text animation={'fadeInLeft'} iterationCount={'infinite'} >Texto Animado</Animar.Text>
            <Animar.Text animation={'fadeInUp'} delay={1000} iterationCount={'infinite'}>Texto Animado com Delay</Animar.Text>
            <Animar.Image 
                animation={'lightSpeedIn'} 
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                iterationCount={'infinite'} 
                style={{ width: 100, height: 100 }} 
            />  

        </View>
    )
};

export default Aula07;