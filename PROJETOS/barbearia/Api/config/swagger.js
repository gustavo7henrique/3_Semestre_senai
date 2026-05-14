// import { application, request } from "express";
// import { status } from "express/lib/response";

const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API Barbearia',
        description: 'Documentação da API de barbearia',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor Localhost'
        }
    ],
    tags: [
        { name: "Autenticação", description: "Login do Usuário" },
        { name: "Usuários", description: "Operações relacionadas aos usuários" },
        { name: "Serviços", description: "Operações relacionadas aos serviços" },
        { name: "Agendamentos", description: "Operações relacionadas aos agendamentos" }

    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar Usuários",
                security: [
                    { bearerAuth: [] }
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Usuarios" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Usuários"],
                summary: "Cadastrar novo usuário ",
                description: "Recebe nome, email, senha e tipo para cadastrar novo usuario",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição (preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno so Servidor"
                    }
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ["Usuários"],
                summary: "Atualizar usuário completo",
                description: "Atualiza todos os campos de um usuário existente",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "Id do usuário a ser atualizado",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Usuario" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Usuário atualizado com sucesso",
                        content: { "application/json": { example: "Usuário atualizado com sucesso" } }
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: { "application/json": { example: "Usuário não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            },
            delete: {
                tags: ["Usuários"],
                summary: "Excluir o usuário",
                description: "Exclui o usuário",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "Id do usuário a ser excluído",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                responses: {
                    200: {
                        description: "Usuário excluído com sucesso",
                        content: { "application/json": { example: "Usuário não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            }
        },
        "/login": {
            post: {
                tags: ['Autenticação'],
                summary: 'Realizar Login',
                description: "Autentica um usuario e retorna id e nome",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Login_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Login realizado com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Resposta_Login"
                                }
                            }
                        }
                    },
                    400: { description: "Email e senha são obrigatorios" },
                    401: { description: "Credenciais inválidas" },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/servicos": {
            get: {
                tags: ["Serviços"],
                summary: "Listar Serviços",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Servicos" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Serviços"],
                summary: "Cadastrar novo serviço",
                description: "Recebe nome, preco, descricao e ativo para cadastrar novo serviço",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Servico"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Serviço cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno so Servidor"
                    }
                }
            }
        },
        "/servicos/{id_servico}": {
            put: {
                tags: ["Serviços"],
                summary: "Atualizar serviço completo",
                description: "Atualiza todos os campos de um serviço existente",
                parameters: [
                    {
                        name: "id_servico",
                        in: "path",
                        required: true,
                        description: "Id do serviço a ser atualizado",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Servico" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Serviço atualizado com sucesso",
                        content: { "application/json": { example: "Serviço atualizado com sucesso" } }
                    },
                    404: {
                        description: "Serviço não encontrado",
                        content: { "application/json": { example: "Serviço não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            },
            delete: {
                tags: ["Serviços"],
                summary: "Excluir serviço",
                description: "Exclui um serviço existente",
                parameters: [
                    {
                        name: "id_servico",
                        in: "path",
                        required: true,
                        description: "Id do serviço a ser excluído",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                responses: {
                    200: {
                        description: "Serviço excluído com sucesso",
                        content: { "application/json": { example: "Serviço excluído com sucesso" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            }
        },
        "/agendamentos": {
            get: {
                tags: ["Agendamentos"],
                summary: "Listar Agendamentos",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Agendamentos" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Agendamentos"],
                summary: "Cadastrar novo agendamento",
                description: "Recebe data_hora, status, id_cliente, id_servico para cadastrar novo agendamento",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Agendamentos"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Agendamento cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno no Servidor"
                    }
                }
            }
        },
        "/agendamentos/{id_agendamento}": {
            put: {
                tags: ["Agendamentos"],
                summary: "Atualizar agendamento completo",
                description: "Atualiza todos os campos de um agendamento existente",
                parameters: [
                    {
                        name: "id_agendamento",
                        in: "path",
                        required: true,
                        description: "Id do agendamento a ser atualizado",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Agendamentos" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Agendamento atualizado com sucesso",
                        content: { "application/json": { example: "Agendamento atualizado com sucesso" } }
                    },
                    404: {
                        description: "Agendamento não encontrado",
                        content: { "application/json": { example: "Agendamento não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            },
            delete: {
                tags: ["Agendamentos"],
                summary: "Excluir o agendamento",
                description: "Exclui o agendamento",
                parameters: [
                    {
                        name: "id_agendamento",
                        in: "path",
                        required: true,
                        description: "Id do agendamento a ser excluído",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                responses: {
                    200: {
                        description: "Agendamento excluído com sucesso",
                        content: { "application/json": { example: "Agendamento não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            }
        }

    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                description: 'Insira o Token obtido no login'
            }
        },
        schemas: {

            //Login
            Login_Usuario: {
                type: "object",
                required: ["email", "senha"],
                properties: {
                    email: { type: "string", example: "fulano@email.com" },
                    senha: { type: "string", example: "2026" },
                }
            },
            Resposta_Login: {
                type: "object",
                properties: {
                    message: { type: 'string', example: 'Login realizado com sucesso' },
                    token: {
                        type: 'string',
                        description: 'Token JWT gerado',
                        example: 'eyJhbGciOi5ftd...'
                    },
                    usuario: {
                        type: 'object',
                        properties: {
                            id_usuario: { type: 'integer', example: 1 },
                            email: { type: "string", example: "gustavo@email.com" },
                            senha: { type: "string", example: "2026" },
                        }
                    }
                }
            },

            //Usuários
            Lista_Usuarios: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Fulano" },
                    email: { type: "string", example: "fulanoo@email.com" },
                    tipo: { type: "string", example: "admin" },
                }
            },
            Cadastro_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Fulano" },
                    email: { type: "string", example: "fulanoo@email.com" },
                    senha: { type: "string", example: "2026" },
                    tipo: { type: "string", example: "admin" },
                }
            },
            Atualizacao_Usuario: {
                type: "object",
                required: ["nome", "email", "senha", "tipo"],
                properties: {
                    nome: { type: "string", example: "Gustavo" },
                    email: { type: "string", example: "gustavo@email.com" },
                    senha: { type: "string", example: "2026" },
                    tipo: { type: "string", example: "admin" },
                }
            },

            //Serviços
            Lista_Servicos: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Corte de Cabelo" },
                    preco: { type: "number", example: 20.00 },
                    descricao: { type: "string", example: "Servico de corte de cabelo" }
                }
            },
            Cadastro_Servico: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Corte de Cabelo" },
                    descricao: { type: "string", example: "Servico de corte de cabelo" },
                    preco: { type: "number", example: 20.00 }
                }
            },
            Atualizacao_Servico: {
                type: "object",
                required: ["nome", "descricao", "preco"],
                properties: {
                    nome: { type: "string", example: "Corte de Cabelo" },
                    descricao: { type: "string", example: "Servico de corte de cabelo" },
                    preco: { type: "number", example: 20.00 }
                }
            },

            //Agendamentos
            Lista_Agendamentos: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    data_hora: { type: "string", example: "09/04/2026 14:30" },
                    status: { type: "string", example: "Agendado" },
                    id_cliente: { type: "integer", example: 1 },
                    id_servico: { type: "integer", example: 1 }
                }
            },
            Cadastro_Agendamentos: {
                type: "object",
                properties: {
                    data_hora: { type: "string", example: "09/04/2026 14:30" },
                    status: { type: "string", example: "Agendado" },
                    id_cliente: { type: "integer", example: 1 },
                    id_servico: { type: "integer", example: 1 }
                }
            },
            Atualizacao_Agendamentos: {
                type: "object",
                required: ["data_hora", "status", "id_cliente", "id_servico"],
                properties: {
                    data_hora: { type: "string", example: "09/04/2026 14:30" },
                    status: { type: "string", example: "Agendado" },
                    id_cliente: { type: "integer", example: 1 },
                    id_servico: { type: "integer", example: 1 }
                }
            }
        }
    }
}

export default documentacao;