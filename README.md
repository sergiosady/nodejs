# API — MOVIES

API para criação de catálogo de filmes
com autenticação/autorização e persistência de dados.
Feita utilizando, em partes, POO para estudo.

---

### Pré-requisitos

- Node.js v18+
- MongoDB via Mongoose
- Dependências instaladas

### Como acessar

1. Clone o repositório
2. Instale as dependências com o comando `npm install`
3. Configure o seu banco de dados(mongoDB) para receber collections users e movies
4. Preencha as variáveis de ambiente, a string de conexão do seu mongoose(mongoDB) e a secret para assinatura JWT
5. Inicie a aplicação com o comando `npm run dev`
6. Teste a aplicação utilizando sua ferramente de escolha(Postman, Thunder Client, Insomnia)
7. Para fazer a autenticação após a criação de um user (POST /users `name, email, age, password`), utilize o endpoint POST /authenticate com `email, password`, gerando o JWT
8. Agora você pode criar/alterar/deletar filmes no endpoint /movies utilizando o token no authorization header(`Bearer <jwt_gerado>`)

## Endpoints

### /users

- `POST /users` - Cria um novo usuário
- `GET /users` - Lista todos os usuários
- `GET /users/:id` - Busca um usuário pelo ID
- `PUT /users/:id` - Atualiza um usuário pelo ID
- `DELETE /users/:id` - Deleta um usuário pelo ID

### /authenticate

- `POST /authenticate` - Realiza login e retorna um token JWT

### /movies

- `POST /movies` - Cria um novo filme
- `GET /movies` - Lista todos os filmes
- `GET /movies/:id` - Busca um filme pelo ID
- `PUT /movies/:id` - Atualiza um filme pelo ID
- `DELETE /movies/:id` - Deleta um filme pelo ID
