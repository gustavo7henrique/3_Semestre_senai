import { View, Text, FlatList } from "react-native-web";
import Hr from "./Hr";

import Exercicio_01 from "./Aula03_Ex01";
import Exercicio_02 from "./Aula03_Ex02";

const Aula03 = () => {

    const turmas = [
        { id: 1, turma: '3º B', pontuacao: 20},
        { id: 2, turma: '3º A', pontuacao: 10},
        { id: 3, turma: '2º B', pontuacao: 5},
        { id: 4, turma: '2º A', pontuacao: 0}
    ];

    function exibiritenslista({ item }) {
        //Renderizando cad item da lista de forma personalizada
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{item.id}</Text>
                <Text>{item.turma}</Text>
            </View>
        )
    };
    
    function exibiritenslistainterclasse({ item }) {
        //Renderizando cad item da lista de forma personalizada
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text><b>Pos:</b> {item.id}</Text>
                <Text><b>Turma</b> {item.turma}</Text>
                <Text><b>Pontos</b> {item.pontuacao}</Text>
            </View>
        )
    }

    return (
        <View>
            <Hr />
            <Text>Aula 03 - Lista com FlatList</Text>
            <Text>Aprendendo a manipular listas em React Native</Text>
            <Hr />

            Criando listas com função .map()
            {
                turmas.map((item) => (
                    <Text key={item.id}>Turma: {item.turma}</Text>
                ))
            }

            <Hr />

            {/*Criando listas utilizando componente FlatList*/}
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Lista com FlatList</Text>
            <FlatList
                data={turmas} //Passar vetor com os dados a serem exibidos
                renderItem={exibiritenslista} //Passar a função para exibir os itens
                keyExtractor={item => item.id} //Passar função para extrair as chaves
            />

            <Hr />

            {/*Criando classificação pro interclasse SESI */}
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Interclasse SESI 2026</Text>
            <FlatList
                data={turmas} //Passar vetor com os dados a serem exibidos
                renderItem={exibiritenslistainterclasse} //Passar a função para exibir os itens
                keyExtractor={item => item.id} //Passar função para extrair as chaves
            />

            <Hr/>
            <Text style={{fontSize: 20, textAlign: 'center'}}><b>Exercícios</b></Text>
            <Exercicio_01/>
            <Exercicio_02/>

            <Hr/>

        </View>
    )
};

export default Aula03;