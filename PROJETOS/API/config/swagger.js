import { application, request } from "express";

const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API FinanControl',
        description: 'Documentação da API de gerenciamento financeiro',
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
        { name: "Categorias", description: "Operações relacionadas as categorias" },
        { name: "SubCategorias", description: "Operações relacionadas as subcategorias" }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar Usuários",
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
                description: "Recebe nome, email, senha, tipo_acesso e  para cadastrar novo usuario",
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
                        description: "Usuario cadastrado com sucesso"
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
                summary: "Deasativar o usuário",
                description: "Desativa o usuário",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "Id do usuário a ser desativado",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                responses: {
                    200: {
                        description: "Usuário desativado com sucesso",
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
        "/categorias": {
            get: {
                tags: ["Categorias"],
                summary: "Listar Categorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Categorias" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Categorias"],
                summary: "Cadastrar nova categoria ",
                description: "Recebe nome, descricao, tipo, cor, icone e ativo para cadastrar nova categoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Categoria"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Categoria cadastrada com sucesso"
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
        "/categorias/{id_categoria}": {
            put: {
                tags: ["Categorias"],
                summary: "Atualizar categoria completa",
                description: "Atualiza todos os campos de uma categoria existente",
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "Id da categoria a ser atualizada",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Categoria" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Categoria atualizada com sucesso",
                        content: { "application/json": { example: "Categoria atualizada com sucesso" } }
                    },
                    404: {
                        description: "Categoria não encontrada",
                        content: { "application/json": { example: "Categoria não encontrada" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            },
            delete: {
                tags: ["Categorias"],
                summary: "Deasativar a categoria",
                description: "Desativa a categoria",
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "Id da categoria a ser desativada",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                responses: {
                    200: {
                        description: "Categoria desativada com sucesso",
                        content: { "application/json": { example: "Categoria não encontrada" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            }
        },
        "/subcategorias": {
            get: {
                tags: ["SubCategorias"],
                summary: "Listar Subategorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_SubCategorias" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["SubCategorias"],
                summary: "Cadastrar nova subcategoria ",
                description: "Recebe nome, ativo e id_categoria para cadastrar nova subcategoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_SubCategoria"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Categoria cadastrada com sucesso"
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
        "/subcategorias/{id_subcategoria}": {
            put: {
                tags: ["SubCategorias"],
                summary: "Atualizar subcategoria completa",
                description: "Atualiza todos os campos de uma subcategoria existente",
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "Id da subcategoria a ser atualizada",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_SubCategoria" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "SubCategoria atualizada com sucesso",
                        content: { "application/json": { example: "SubCategoria atualizada com sucesso" } }
                    },
                    404: {
                        description: "SubCategoria não encontrada",
                        content: { "application/json": { example: "SubCategoria não encontrada" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            },
            delete: {
                tags: ["SubCategorias"],
                summary: "Deasativar a subcategoria",
                description: "Desativa a subcategoria",
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "Id da subcategoria a ser desativada",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                responses: {
                    200: {
                        description: "SubCategoria desativada com sucesso",
                        content: { "application/json": { example: "SubCategoria não encontrada" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            }
        },
    },
    components: {
        schemas: {
            Lista_Usuarios: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Fulano" },
                    email: { type: "string", example: "fulanoo@email.com" },
                    tipo_acesso: { type: "string", example: "Administrador" },
                }
            },
            Cadastro_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Fulano" },
                    email: { type: "string", example: "fulanoo@email.com" },
                    senha: { type: "string", example: "2026" },
                    tipo_acesso: { type: "string", example: "Administrador" },
                }
            },
            Atualizacao_Usuario: {
                type: "object",
                required: ["nome", "email", "senha", "tipo_acesso", "ativo"],
                properties: {
                    nome: { type: "string", example: "Gustavo" },
                    email: { type: "string", example: "gustavo@email.com" },
                    senha: { type: "string", example: "2026" },
                    tipo_acesso: { type: "string", example: "Administrador" },
                    ativo: { type: "boolean", example: true }
                }
            },
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
            Lista_Categorias: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Saúde" },
                    descricao: { type: "string", example: "Produtos de saúde" },
                    tipo: { type: "string", example: "E" },
                    cor: { type: "string", example: "#FF5733" },
                    icone: { type: "string", example: "icon-name" },
                    ativo: { type: "boolean", example: true }
                }
            },
            Cadastro_Categoria: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Saúde" },
                    descricao: { type: "string", example: "Produtos de saúde" },
                    tipo: { type: "string", example: "E" },
                    cor: { type: "string", example: "#FF5733" },
                    icone: { type: "string", example: "icone-nome" },
                    ativo: { type: "boolean", example: true }
                }
            },
             Atualizacao_Categoria: {
                type: "object",
                required: ["nome", "descricao", "tipo", "cor", "icone", "ativo"],
                properties: {
                    nome: { type: "string", example: "Saúde" },
                    descricao: { type: "string", example: "Produtos de saúde" },
                    tipo: { type: "string", example: "E" },
                    cor: { type: "string", example: "#FF5733" },
                    icone: { type: "string", example: "icone-nome" },
                    ativo: { type: "boolean", example: true }
                }
            },
            Lista_SubCategorias: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "subcategoria" },
                    ativo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 }
                }
            },
            Cadastro_SubCategoria: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "subcategoria" },
                    ativo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 }
                }
            },
             Atualizacao_SubCategoria: {
                type: "object",
                required: ["nome", "ativo", "id_categoria"],
                properties: {
                    nome: { type: "string", example: "subcategoria" },
                    ativo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 },
                }
            }
        }
    }
}

export default documentacao;