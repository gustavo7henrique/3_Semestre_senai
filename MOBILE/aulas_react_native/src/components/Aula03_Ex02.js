import { View, Text, FlatList, Image } from "react-native-web";
import Hr from "./Hr";


const Exercicio_02 = () => {

    const produtos = [
        {
            id: 1,
            foto: <Image source={{ uri: 'https://m.media-amazon.com/images/I/51DkRNvvgNL._AC_UF1000,1000_QL80_.jpg' }}
                style={{
                    width: 60,
                    height: 60,
                    resizeMode: 'contain',
                    borderRadius: 10
                }} />,
            nome: 'Celular', categoria: 'Eletronicos', preco: 700, estoque: 1000
        }
    ];

    function exibirprodutoslista({ item }) {
        //Renderizando cada item da lista de forma personalizada
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ flex: 1, textAlign: 'left' }}>{item.id}</Text>
                <Text style={{ flex: 1, textAlign: 'left' }}>{item.foto}</Text>
                <Text style={{ flex: 1, textAlign: 'left' }}>{item.nome}</Text>
                <Text style={{ flex: 1, textAlign: 'left' }}>{item.categoria}</Text>
                <Text style={{ flex: 1, textAlign: 'left' }}>{item.preco}</Text>
                <Text style={{ flex: 1, textAlign: 'left' }}>{item.estoque}</Text>
            </View>
        )
    }

    return (
        <View>

            {/*Criando listas com função .map()*/}
            {
                produtos.map((produto) => (
                    <Text key={produto.id}>Nome: {produto.nome}</Text>
                ))
            }

            {/*Criando listas utilizando componente FlatList*/}
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>FlatList de Produtos</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ flex: 1, textAlign: 'left' }}><b>Id</b></Text>
                <Text style={{ flex: 1, textAlign: 'left' }}><b>Foto</b></Text>
                <Text style={{ flex: 1, textAlign: 'left' }}><b>Nome</b></Text>
                <Text style={{ flex: 1, textAlign: 'left' }}><b>Categora</b></Text>
                <Text style={{ flex: 1, textAlign: 'left' }}><b>Preço</b></Text>
                <Text style={{ flex: 1, textAlign: 'left' }}><b>Estoque</b></Text>
            </View>

            <FlatList
                data={produtos} //Passar vetor com os dados a serem exibidos
                renderItem={exibirprodutoslista} //Passar a função para exibir os itens
                keyExtractor={item => item.id} //Passar função para extrair as chaves
            />

        </View>
    )

};

export default Exercicio_02;