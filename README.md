## Instalação de Dependências

1. Abra um terminal na raiz do seu projeto.
   
2. Execute o seguinte comando para instalar as dependências do seu projeto:
   
    ```
    npm install
    ```
   
   Isso instalará todas as dependências listadas no arquivo `package.json`, incluindo o Express, Mongoose, bcrypt e outras que você pode estar usando em seu projeto.

## Iniciar o Servidor

1. Após a instalação das dependências, você pode iniciar o servidor com o seguinte comando:
   
    ```
    npm start
    ```
   
   Este comando executará o script definido como `"start"` no arquivo `package.json`. Certifique-se de que o script `"start"` esteja configurado para iniciar o seu servidor corretamente.

2. Após executar o comando, o servidor estará em execução e pronto para atender às solicitações HTTP.

## Rotas de Usuário

### Criação de Usuário

- **Método:** POST
- **Endpoint:** `http://localhost:3001/api/users`
- **Descrição:** Cria um novo usuário.
- **Corpo da Requisição:**
  
  ```json
  {
    "usuario": "Nome do Usuário",
    "email": "email@example.com",
    "senha": "senha_do_usuario"
  }
  ```
  
- **Resposta de Sucesso:** Status 201 - Usuário criado com sucesso.
- **Resposta de Erro:** Status 500 - Erro ao criar usuário.

### Listagem de Usuários

- **Método:** GET
- **Endpoint:** `http://localhost:3001/api/users`
- **Descrição:** Obtém todos os usuários cadastrados.

### Obter Usuário por ID

- **Método:** GET
- **Endpoint:** `http://localhost:3001/api/users/:id`
- **Descrição:** Obtém um usuário específico pelo ID.

### Excluir Usuário

- **Método:** DELETE
- **Endpoint:** `http://localhost:3001/api/users/:id`
- **Descrição:** Exclui um usuário específico pelo ID.

### Atualizar Usuário

- **Método:** PUT
- **Endpoint:** `http://localhost:3001/api/users/:id`
- **Descrição:** Atualiza os dados de um usuário específico pelo ID.

### Login de Usuário

- **Método:** POST
- **Endpoint:** `http://localhost:3001/api/login`
- **Descrição:** Realiza o login de um usuário.
- **Corpo da Requisição:**
  
  ```json
  {
    "usuario": "Nome do Usuário",
    "senha": "senha_do_usuario"
  } 
  ```
  
- **Resposta de Sucesso:** Status 200 - Login bem-sucedido.
- **Resposta de Erro:** Status 400 - Usuário não encontrado ou senha inválida.
### Logout de Usuário

-   **Método:** GET
-   **Endpoint:** `http://localhost:3001/api/logout`
-   **Descrição:** Realiza o logout de um usuário autenticado.
## Rotas de Favoritos

### Adicionar Favorito

- **Método:** POST
- **Endpoint:** `http://localhost:3001/api/favorites`
- **Descrição:** Adiciona um novo filme à lista de favoritos.
- **Corpo da Requisição:**
  
  ```json
  {
    "idFilme": 123,
    "urlFoto": "url_da_foto",
    "title": "Título_do_Filme",
    "sources": ["fonte1", "fonte2"],
    "usuario": "ID_do_Usuário"
  } 
  ```
  
- **Resposta de Sucesso:** Status 201 - Favorito adicionado com sucesso.
- **Resposta de Erro:** Status 500 - Erro ao adicionar favorito.

### Listar Favoritos

- **Método:** GET
- **Endpoint:** `http://localhost:3001/api/favorites`
- **Descrição:** Obtém todos os favoritos cadastrados.

### Obter Favorito por ID

- **Método:** GET
- **Endpoint:** `http://localhost:3001/api/favorites/:id`
- **Descrição:** Obtém um favorito específico pelo ID.

### Excluir Favorito

- **Método:** DELETE
- **Endpoint:** `http://localhost:3001/api/favorites/:id`
- **Descrição:** Exclui um favorito específico pelo ID.

### Atualizar Favorito

- **Método:** PUT
- **Endpoint:** `http://localhost:3001/api/favorites/:id`
- **Descrição:** Atualiza os dados de um favorito específico pelo ID.

### Listar Favoritos de um Usuário

- **Método:** GET
- **Endpoint:** `http://localhost:3001/api/favorites/user/:userId`
- **Descrição:** Obtém todos os favoritos de um usuário específico pelo ID do usuário.