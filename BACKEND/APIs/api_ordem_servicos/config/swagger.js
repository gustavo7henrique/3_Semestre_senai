const documentacao = {
    openapi: '3.0.3',
    info:{
        title: 'API Ordem de Serviços',
        description: 'Documentaçãoda API de Ordens de Serviços',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor Localhost'
        }
    ],
    tags: [
        { name: "Usuários", description: "Operações relacionadas aos usuários" },
        { name: "Deparatamentos", description: "Operações relacionadas aos departamentos" },
        { name: "Ordem Serviços", description: "Operações relacionadas às ordem de serviços" }
    ],
    paths: {
        "/usuarios":{
            get: {
                tags: ["Usuários"],
                sumary: "Listar Usuários",
                responses: {
                    200:{
                        description: "Dados obtidos com sucesso",
                        content:{
                            "apllication/json":{
                                schema: {
                                    type: "array",
                                    items: {$ref: "#/components/schemas/Lista_Usuarios"}
                                }
                            }
                        }
                    }
                }
            }
        },
        "/departamentos":{
            get: {
                tags: ["Departamentos"],
                sumary: "Listar Departamentos",
                responses: {
                    200:{
                        description: "Dados obtidos com sucesso",
                        content:{
                            "apllication/json":{
                                schema: {
                                    type: "array",
                                    items: {$ref: "#/components/schemas/Lista_Departamentos"}
                                }
                            }
                        }
                    }
                }
            }
        },
        "/ordem-servicos":{
            get: {
                tags: ["Ordem Serviços"],
                sumary: "Listar Ordem Serviços",
                responses: {
                    200:{
                        description: "Dados obtidos com sucesso",
                        content:{
                            "apllication/json":{
                                schema: {
                                    type: "array",
                                    items: {$ref: "#/components/schemas/Lista_OrdemServicos"}
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    components: {
        schemas: {
            Lista_Usuarios: {
                type: "object",
                properties: {
                    id: {type: "integer", example: 1},
                    nome: {type: "string", example: "Gustavo"},
                    email: {type: "string", example: "gustavo@email.com"}
                }
            },
            Lista_Departamentos: {
                type: "object",
                properties: {
                    id: {type: "integer", example: 1},
                    nome: {type: "string", example: "TI"},
                    descricao: {type: "string", example: "Tecnologia da Informação"}
                }
            },
            Lista_OrdemServicos: {
                type: "object",
                properties: {
                    id_ordem: { type: "integer", example: 1 },
                    numero_ordem: { type: "integer", example: 2024001 },
                    titulo: { type: "string", example: "Problema no sistema" },
                    descricao: { type: "string", example: "Sistema não está respondendo" },
                    prioridade: { type: "string", example: "Alta" },
                    status: { type: "string", example: "Em andamento" },
                    data: { type: "string", format: "date", example: "2026-02-27" },
                    id_usuario: { type: "integer", example: 3 },
                    id_departamento: { type: "integer", example: 2 }
                }
            }
        }
    }
}   

export default documentacao;