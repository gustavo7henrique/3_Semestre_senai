import Jogador from "../models/Jogador.js";

//Vetor de objetos de livros
let listaJogadores = [
    new Jogador(1, 'Gustavo Henrique', 20000 ),

]

const jogadorController = {
    listar: (req, res) => {
        res.render('jogadores.ejs', {jogadores: listaJogadores})
    },
    adicionar: (req, res) => {
        const {titulo, pontuacao} = req.body;

        try{
            const novoJogador = new Jogador(
                listaJogadores.length + 1,
                nome,
                Number(pontuacao)
            );
            listaJogadores.push(novoJogador);
            res.redirect('/jogadores');
        }
        catch(e) {
            res.status(400).render('jogadores.ejs', {lista: listaJogadores, erro: e.message})
        }
    }
}

export default jogadorController;
