import { View, Text, FlatList } from "react-native-web";
import Hr from "./Hr";


const Exercicio_01 = () => {

    const alunos = [
        { id: 1, aluno: 'Fulano', materia: 'Biologia', media: 7, faltas: 8 },
        { id: 2, aluno: 'Beltrano', materia: 'Matemática', media: 6, faltas: 6 },
        { id: 3, aluno: 'Siclano', materia: 'Física', media: 8, faltas: 4 },
        { id: 4, aluno: 'Fulana', materia: 'Química', media: 9, faltas: 2 }
    ];

    function exibiralunoslista({ item }) {
        //Renderizando cada item da lista de forma personalizada
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{flex: 1, textAlign: 'left'}}><b>Id: </b>{item.id}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}><b>Nome: </b>{item.aluno}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}><b>Matéria: </b>{item.materia}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}><b>Média: </b>{item.media}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}><b>Faltas: </b>{item.faltas}</Text>
            </View>
        )
    }

    return (
        <View>

            {/*Criando listas com função .map()*/}
            {
                alunos.map((aluno) => (
                    <Text key={aluno.id}>Nome: {aluno.aluno}</Text>
                ))
            }

            {/*Criando listas utilizando componente FlatList*/}
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>FlatList de Alunos</Text>
            <FlatList
                data={alunos} //Passar vetor com os dados a serem exibidos
                renderItem={exibiralunoslista} //Passar a função para exibir os itens
                keyExtractor={item => item.id} //Passar função para extrair as chaves
            />

        </View>
    )

};

export default Exercicio_01;