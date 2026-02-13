class Jogador {
    constructor(id, nome, pontuacao){
        if(!nome || !pontuacao){
            throw new Error('Nome e pontuação, são OBRIGATÓRIOS')
        }
        this.id = id;
        this.nome = nome;
        this.pontuacao = pontuacao;
       
    }

    descricao(){
        return `${this.nome} - ${this.pontuacao}`
    }
    verificarTamanho(){
        if(this.pontuacao >= 15000) return 'Avançado'
        if(this.pontuacao <= 15000 && this.pontuacao >= 3000 ) return 'Intermediário'
        return 'Iniciante'

    }
    
}



export default Jogador