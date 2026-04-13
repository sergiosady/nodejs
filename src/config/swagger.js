import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movies API",
      version: "1.0.0",
      description: "API para gerenciar catálogo de filmes",
    },
    paths: {
      "/movies": {
        post: {
          summary: "Criar um novo filme",
          tags: ["Movies"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    year: { type: "number" },
                  },
                },
              },
            },
          },
          responses: {
            201: { description: "Filme criado com sucesso" },
            409: { description: "Título já existe" },
          },
        },
        get: {
          summary: "Listar todos os filmes",
          tags: ["Movies"],
          responses: {
            200: { description: "Lista de filmes" },
          },
        },
      },
      "/movies/{id}": {
        get: {
          summary: "Buscar filme por ID",
          tags: ["Movies"],
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Filme encontrado" },
            404: { description: "Filme não encontrado" },
          },
        },
        put: {
          summary: "Atualizar um filme",
          tags: ["Movies"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    year: { type: "number" },
                  },
                },
              },
            },
          },
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Filme atualizado" },
            404: { description: "Filme não encontrado" },
          },
        },
        delete: {
          summary: "Deletar um filme",
          tags: ["Movies"],
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            204: { description: "Filme deletado" },
            404: { description: "Filme não encontrado" },
          },
        },
      },
    },
  },
  apis: [],
};

export default swaggerJsdoc(options);
