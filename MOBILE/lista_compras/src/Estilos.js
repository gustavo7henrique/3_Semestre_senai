import {StyleSheet} from "react-native";

export const cor_principal = '#59b6ff'
export const cor_secundaria = '#706ef9'
export const cor_textos = '#f2f2f2'
export const cor_fundo = '#0d0d0d'
export const cor_fundo2 = '#262626'
export const cor_placeholder = '#808080'



const Estilos = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: cor_fundo,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    logo: {
        width: 300,
        height: 40
    },
    input_container: {
        flexDirection: 'row',
        marginBottom: 10
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: cor_fundo2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: cor_principal,
        paddingHorizontal: 10,
        color: cor_textos,
        fontSize: 16,
        marginRight: 6
    },
    botao: {
        width: 50,
        borderRadius: 6,
        backgroundColor: cor_secundaria,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto_botao: {
        color: cor_textos,
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 5
    },
    corpo: {
        flex: 1,
        paddingHorizontal: 20
    },
    botao_item: {
        backgroundColor: cor_fundo2,
        borderRadius: 8,
        marginBottom: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: cor_placeholder
    },
    texto_botao_item: {
        fontSize: 16,
        color: cor_textos
    },
    texto_botao_item_comprado: {
        fontSize: 16,
        color: cor_placeholder,
        textDecorationLine: 'line-through'
    },
    view_contadores: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7
    },
    contador1: {
        fontWeight: 'bold',
        color: cor_principal,
        marginRight: 10

    },
    contador2: {
        fontWeight: 'bold',
        color: cor_secundaria,
        marginRight: 10
    },
    numero: {
        fontSize: 16,
        backgroundColor: cor_fundo2,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        borderRadius: 50,
        color: cor_textos
    }

});

export default Estilos