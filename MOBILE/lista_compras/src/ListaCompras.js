import React from "react";
import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Image, StatusBar, RefreshControl } from "react-native";
import Estilos, { cor_principal, cor_placeholder, cor_secundaria } from "./Estilos";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
//Importando configurações e funções do Firebase e Firestore
import { firestore } from "../firebase_config";
import { collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc, where } from "firebase/firestore";
import { RefreshControl } from "react-native-web";

const ListaCompras = () => {

    const [item, setItem] = useState('');
    const [listaCompras, setListaCompras] = useState([
        { id: '1', produto: 'Leite 🥛', comprado: false },
        { id: '2', produto: 'Pão 🥖', comprado: true },
        { id: '3', produto: 'Ovos 🥚', comprado: false },
    ]);

    const [atualizando, setAtualizando] = useState(false);

    const buscarDados = async () => {

        //Representa um SELECT * FROM compras
        const comando = query(collection(firestore, 'compras'));
        const dadosBD = await getDocs(comando);

        const novaLista = dadosBD.docs.map((doc) => (
            { id: doc.id, ...doc.data() }
        ));

        setListaCompras(novaLista);
    };

    useEffect(() => {
        buscarDados();
    }, []);

    const exibirItens = ({ item }) => {
        return (
            <TouchableOpacity style={Estilos.botao_item} onPress={() => botaoAtualizar(item)}>
                <Text style={item.comprado == false ? Estilos.texto_botao_item : Estilos.texto_botao_item_comprado}> {item.produto} </Text>
                <MaterialIcons name="delete-sweep" size={24} color={cor_principal} onPress={() => botaoExcluir(item.id)} />
            </TouchableOpacity>
        )
    };

    const botaoAdicionar = async () => {
        const novoItem = { produto: item, comprado: false }

        //Adicionar documento no Firestore
        const docRef = await addDoc(collection(firestore, 'compras'), novoItem);
        console.log('Documento inserido ', docRef);

        buscarDados();
        setItem('')
    };

    const botaoExcluir= async (id) => {
        await deleteDoc(doc(firestore, 'compras', id));
        buscarDados();
    };

    const botaoAtualizar = async (item) => {
        const docRef = doc(firestore, 'compras', item.id);
        await updateDoc(docRef, {comprado: !item.comprado});
        buscarDados();
    };


    return (
        <View style={Estilos.conteudo}>

            <StatusBar backgroundColor={cor_principal} barStyle={"light-content"} />

            <View style={Estilos.header}>
                <Image style={Estilos.logo} source={require('../assets/logo_lista_compras.png')} />
            </View>

            <View style={Estilos.corpo}>

                <View style={Estilos.input_container}>

                    <TextInput
                        placeholder="Adicione um novo item na lista"
                        placeholderTextColor={cor_placeholder}
                        style={Estilos.input}
                        value={item} onChangeText={setItem}
                    />

                    <TouchableOpacity style={Estilos.botao} onPress={botaoAdicionar}>
                        <Text style={Estilos.texto_botao}>+</Text>
                    </TouchableOpacity>

                </View>

                {/*Totalizadores */}
                <View style={Estilos.view_contadores}>

                    <View style={Estilos.view_contadores}>
                        <Text style={Estilos.contador1}>Total de Itens</Text>
                        <Text style={Estilos.numero}>{listaCompras.length}</Text>
                    </View>

                    <View style={Estilos.view_contadores}>
                        <Text style={Estilos.contador2}>Itens Comprados</Text>
                        <Text style={Estilos.numero}>{listaCompras.filter(item => item.comprado === true).length}</Text>
                    </View>

                </View>

                <FlatList
                    data={listaCompras}
                    renderItem={exibirItens}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl refreshing={atualizando} onRefresh={buscarDados} />
                    }
                />

            </View>

        </View>
    );
};

export default ListaCompras;