//Aqui é onde importaremos todas as bibliotecas e compnetese qeu utilizaremos
import { StatusBar } from 'expo-status-bar';

//Todo componente visual utilizado em React Native precisa ser importado
import { StyleSheet, Text, View } from 'react-native';

//Componente tradicional
export default function App() {
  return (

    //O componente View, corresponde ao div, main, section, header do html
    <View style={estilos.container}>

      {/* O componente Text, corresponde ao h1, h2, p, span do html */}
      <Text style={estilos.titulo}>Hello Word!</Text>
      <Text style={estilos.titulo2}>Esse é meu primeiro App</Text>

    <View style={estilos.container2}>
      <Text style={estilos.subtitulo1}>Texto 1</Text>
      <Text style={estilos.subtitulo2}>Texto 2</Text>
      <Text style={estilos.subtitulo3}>Texto 3</Text>
    </View>

      {/* Defino e estilizo a barra de status do dispositivo */}
      <StatusBar style="auto" />
    </View>
  );
};

//Para estilizarmos em Raect Native, importamos o styleSheet e fazemos um objeto estilizaçã igual React
export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    display: 'flex',
    width:'100%',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  titulo2: {
    fontSize: 13,
  },

  subtitulo1: {
    color: 'blue'
  },

  subtitulo2: {
    fontWeight: 'bold',
    textAlign: 'right'
  },

  subtitulo3: {
    color: 'red',
    textAlign: 'center'
  }
});