CREATE TABLE perguntas (
	id_perguntas SERIAL PRIMARY KEY,
	bandeiras_url VARCHAR(1080), 
	opcao_1 VARCHAR(100), 
	opcao_2 VARCHAR(100), 
	opcao_3 VARCHAR(100), 
	opcao_4 VARCHAR(100), 
	resposta_correta VARCHAR(100)
)

INSERT INTO perguntas (bandeiras_url, opcao_1, opcao_2, opcao_3, opcao_4, resposta_correta)
VALUES (
 	'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg', 'Singapura', 'Tailândia', 'Cazaquistão', 'Indonésia', 'Tailândia'
),
(
 	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1280px-Flag_of_North_Macedonia.svg.png', 'Macedônia do Norte', 'Albânia', 'Geórgia', 'Africa do Sul', 'Macedônia do Norte'
),
(
 	'https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg', 'Áustria', 'Suriname', 'Dinamarca', 'Malta', 'Suriname'
),
(
 	'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg', 'Grécia', 'Turquia', 'Chipre', 'Kosovo', 'Chipre'
);

select * from perguntas