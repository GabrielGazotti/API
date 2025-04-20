# API de Recados

## Como instalar o Node.js

Acesse: https://nodejs.org

Clique em LTS e baixe o instalador

Abra o instalador e clique em "Next" até o fim (pode deixar tudo padrão)

## Como usar

1. Inicie o terminal e abra a pasta do arquivo baixado

```
cd API\recados-api
```

2. Inicie o servidor com o comando:

```
node index.js
```

## Testar com Postman

1. Baixe e instale o Postman: https://www.postman.com/downloads/

2. Abra o Postman e importe o arquivo "recados-api.postman_collection.json"

### Criar recado

- Método: **POST**
- URL: `http://localhost:3000/recados`
- Body (raw → JSON):

```json
{
  "titulo": "Exemplo",
  "descricao": "Descrição do recado"
}
```

### Listar recados

- Método: **GET**
- URL: `http://localhost:3000/recados`

### Deletar recado

- Método: **DELETE**
- URL: `http://localhost:3000/recados/:id`
  - Substitua `:id` pelo ID do recado que deseja remover.
