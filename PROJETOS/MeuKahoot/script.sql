CREATE TABLE perguntas (
	id_perguntas SERIAL PRIMARY KEY,
	imagens_url VARCHAR(1080), 
	opcao_1 VARCHAR(100), 
	opcao_2 VARCHAR(100), 
	opcao_3 VARCHAR(100), 
	opcao_4 VARCHAR(100), 
	resposta_correta VARCHAR(100)
);

INSERT INTO perguntas (imagens_url, opcao_1, opcao_2, opcao_3, opcao_4, resposta_correta)
VALUES 

(
    'https://i.pinimg.com/736x/9e/c3/32/9ec332e4395109bafd9e28a69b6b0832.jpg',
    'Cristiano Ronaldo',
    'Neymar',
    'Lionel Messi',
    'Kylian Mbappé',
    'Lionel Messi'
),
(
    'https://i.pinimg.com/736x/12/f0/8e/12f08e217f06bfac7054356c2f9d8b60.jpg',
    'Karim Benzema',
    'Cristiano Ronaldo',
    'Erling Haaland',
    'Luka Modrić',
    'Cristiano Ronaldo'
),
(
    'https://upload.wikimedia.org/wikipedia/commons/1/11/Ford_Mustang_Dark_Horse_Rutesheimer_Autoschau_2025_DSC_9229.jpg',
    'Chevrolet Camaro',
    'Ford Mustang',
    'Dodge Challenger',
    'BMW M4',
    'Ford Mustang'
),
(
    'https://cdn.motor1.com/images/mgl/Av02V/s1/2022-nissan-gt-r-nismo-special-edition.jpg',
    'Toyota Supra',
    'Subaru WRX STI',
    'Nissan GT-R',
    'Mitsubishi Lancer Evolution',
    'Nissan GT-R'
),
(
    'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
    'Java',
    'Python',
    'C',
    'C#',
    'C'
),
(
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    'Java',
    'JavaScript',
    'TypeScript',
    'Python',
    'JavaScript'
);