import { View, Text, TextInput, TouchableOpacity, Image, Switch} from 'react-native';
import { useState } from 'react';
import { enderecoServidor } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { EstilosLogin, coresLogin } from '../styles/EstilosLogin';
import { corFundo2, corPrincipal } from '../styles/Estilos';

import { LinearGradient } from 'expo-linear-gradient';

export default function Login({ navigation }) {


    const [email, setEmail] = useState('beltrano@email.com');
    const [senha, setSenha] = useState('2027');
    const [mensagem, setMensagem] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    async function botaoEntrar() {
        try {
            if (email == '' || senha == '') {
                setMensagem('Preencha todos os campos')
                return
            }

            const dadosLogin = {
                "email": email,
                "senha": senha
            }

            const resposta = await fetch(`${enderecoServidor}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosLogin)
            })

            if (resposta.status == 404) {
                setMensagem(`Rota não encontrada: ${resposta.url}`)
                return
            }
            const dados = await resposta.json();

            if (resposta.status == 500) {
                setMensagem(dados.message)
                return
            }

            if (resposta.ok) {
                // localStorage.setItem('UsuarioLogado', JSON.stringify(dados))
                await AsyncStorage.setItem('UsuarioLogado', JSON.stringify(dados));
                navigation.navigate('MenuDrawer')
            }
            else {
                setMensagem('Email ou senha incoretos')
            }

        } catch (erro) {
            setMensagem(`Erro ao realizar login ${erro.message}`)
        }
    }

    return (
        <View style={EstilosLogin.container}>
            <LinearGradient
                colors={[ corFundo2, corPrincipal ]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={EstilosLogin.gradiente}
            >
                <View style={EstilosLogin.cabecalho}>
                    <Image source={require('../../assets/logo.png')} style={EstilosLogin.iconeLogo}/>
                    <View>
                        <Text style={EstilosLogin.nomeApp}>FinanControl</Text>
                        <Text style={EstilosLogin.subtituloApp}>O seu controle financeiro</Text>
                    </View>
                </View>

                <View style={EstilosLogin.conteudoPrincipal}>
                    <View style={EstilosLogin.formularioLogin}>
                        <Text style={EstilosLogin.titulo}>Acesse sua conta</Text>

                        <View style={EstilosLogin.grupoInput}>
                            <MaterialIcons name='email' size={22} style={EstilosLogin.iconeInput} />
                            <TextInput placeholder='Digite seu email' placeholderTextColor={coresLogin.placeholder}
                                style={EstilosLogin.input}value={email} onChangeText={setEmail}
                                keyboardType='email-address' autoCapitalize='none'
                            />
                        </View>

                        <View style={EstilosLogin.grupoInput}>
                            <MaterialIcons name='lock' size={22} style={EstilosLogin.iconeInput} />
                            <TextInput placeholder='Digite sua senha' placeholderTextColor={coresLogin.placeholder}
                                style={EstilosLogin.input}value={senha} onChangeText={setSenha}
                                secureTextEntry={!mostrarSenha}
                            />
                            <TouchableOpacity style={EstilosLogin.alternarVisibilidade} 
                                onPress={() => setMostrarSenha(!mostrarSenha)}
                            >
                                <MaterialIcons
                                    size={24} color={coresLogin.icone}
                                    name={mostrarSenha == true ? 'visibility-off' : 'visibility'}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={EstilosLogin.entreOpcoes}>
                            <View style={EstilosLogin.containerCheckbox}>
                                <Switch/>
                                <Text style={EstilosLogin.rotuloCheckbox}>Lembrar-me</Text>
                            </View>
                            <Text style={EstilosLogin.esqueceuSenha}>Esqueceu a senha</Text>
                        </View>

                        <TouchableOpacity style={EstilosLogin.botaoEntrar} onPress={botaoEntrar}>
                            <Text style={EstilosLogin.textoBotaoEntrar}>Entrar</Text>
                        </TouchableOpacity>

                        <Text style={EstilosLogin.mensagemFeedback}>{mensagem}</Text>

                    </View>
                </View>

            </LinearGradient>
        </View>
    )
}