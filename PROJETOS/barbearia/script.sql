CREATE TABLE usuarios (
	id_usuario SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(250) UNIQUE NOT NULL,
	senha VARCHAR(1024) NOT NULL,
	tipo VARCHAR(50) NOT NULL
);

CREATE TABLE servicos (
	id_servico SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(1000)
);

CREATE TABLE agendamentos (
	id_agendamento SERIAL PRIMARY KEY,
	id_cliente INT,
    id_servico INT,
	data_hora TIMESTAMP NOT NULL,
    status VARCHAR(50),
	FOREIGN KEY (id_cliente) REFERENCES usuarios(id_usuario),
	FOREIGN KEY (id_servico) REFERENCES servicos(id_servico)
);