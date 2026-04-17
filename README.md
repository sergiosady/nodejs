# API — MOVIES

API para criação de catálogo de filmes.
Feita utilizando POO para aprendizado.

---

## Testando a API com Swagger

Esta aplicação possui uma interface interativa de documentação **Swagger UI** disponível diretamente na **página raiz** do servidor.

Ao acessar a URL base da aplicação, você será **redirecionado automaticamente** para o Swagger UI, onde é possível visualizar todos os endpoints disponíveis e testá-los diretamente pelo navegador, sem necessidade de ferramentas externas.

### Como acessar

1. Baixe as dependências
2. Inicie a aplicação
2. Abra o navegador e acesse a URL raiz:

```
http://localhost:3000/
```

> O redirecionamento para o Swagger UI ocorrerá automaticamente.

### O que você pode fazer no Swagger

- Visualizar todos os endpoints da API organizados por módulo
- Consultar os parâmetros de entrada e os schemas de resposta de cada rota
- Executar requisições diretamente pelo navegador (botão **Try it out**)
- Inspecionar os códigos de status e os corpos de resposta retornados

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) v18+  *(ou o runtime utilizado no projeto)*
- Dependências instaladas

## Executando a aplicação

```bash
# Desenvolvimento
npm run dev

## Estrutura do projeto

```
src/
├── config/       # Pasta de configurações de dependências
├── controller/   # Controller para a API
├── models/       # Estrutura de dados da entidade Movies
└── routes/       # Rotas da aplicação
└── services/     # Camada com regras de negócio aplicadas e um mock de banco de dados(movies = [])
└── index.js      # Ponto de entrada / Middlewares aplicados
```
