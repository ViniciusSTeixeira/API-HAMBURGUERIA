<br />
<p align="center">
    <img src="./readme/bfb85a3f88168ed6c5eaf931e6831f76.gif" alt="Logo" width="700">

  <h1 align="center">API REST - Hamburgueria</h1>
 <br />
  <p align="center">SUMÁRIO<p align="center">
  <a href="#pré-requisitos">Pré-requisitos</a> |
  <a href="#Passo-a-Passo">Passo a Passo</a> |
  <a href="#sobre"> Sobre </a> |
  <a href="#conhecimentos-praticados"> Conhecimentos praticados </a> |
  <a href="#rotas-da-aplicação"> Rotas da aplicação </a>       
       <br />
    <br />
  </p>
</p>

# Pré-requisitos:

### Instalando e rodando o projeto:

Você precisará instalar em sua máquina as seguintes ferramentas: <br>
✔[Git](https://git-scm.com) <br>
✔[Node.js](https://nodejs.org/en/) <br>
✔[Insomnia](https://insomnia.rest/download) <br>
✔[VSCode](https://code.visualstudio.com/) <br>

# Passo a Passo
## no terminal digite os seguintes comandos:

1 - git clone https://github.com/ViniciusSTeixeira/API-HAMBURGUERIA.git<br>
2 - npm install: Para instalar as dependencias necessárias para rodar o projeto<br>
3 - npm start: Para iniciar o Projeto<br>

npm install: No terminal após fazer o clone do projeto 

# Sobre

Projeto de fim do 4º Módulo da RESILIA, que tem como objetivo criar uma API REST Baseado em uma Hamburgueria

Nesta API poderemos: criar, listar, atualizar e deletar Endereços.

# Conhecimentos Praticados

<p align="center" >
<img src="./readme/58482ee4cef1014c0b5e4a75.png" alt="Logo" width="100">
<img src="./readme/imgbin_sqlite-database-android-mysql-png.png" alt="Logo" width="200">
<img src="./readme/node-js.png" alt="Logo" width="100">
<img src="./readme/pngwing.com.png" alt="Logo" width="200">
<img src="./readme/insomnia-logo-A35E09EB19-seeklogo.com.png" alt="Logo" width="100">
</p>

# Rotas da aplicação:

## Endereços

<b>[GET] </b> /Endereco - A rota exibirá todos endereços cadastrados<br>

________________________________________________________________________________________________________________

<b>[GET] </b> /Endereco/:id - A rota exibirá o endereço baseado em seu ID.<br>

________________________________________________________________________________________________________________

<b>[POST] </b> /Endereco/criar - A rota criará um novo endereço com base nas informações passadas no corpo da requisição.<br>

```javascript
{
   "pais": "...",
   "estado": "...",
   "cidade": "...",
   "bairro": "...",
   "rua": "...",
   "cep": ...,
   "numero":...
}
```

<h4>Observações:</h4>
 ✔ será gerado automaticamente um campo chamado ID no arquivo (database.sqlite) para realização do CRUD.

________________________________________________________________________________________________________________

<b>[PUT] </b> /Endereco/:id - A rota atualizará um Endereço com as informações passadas no corpo da requisição<br>

<h4>Observações:</h4>
 ✔ Você poderar alterar o campo que achar necessário no endereço.<br>
 ✔ O ID se encontra no arquivo (database.sqlite) ou será exibido quando efetuar um GET.

________________________________________________________________________________________________________________

<b>[DELETE] </b> /Endereco/:id - A rota deletará um quarto baseado em seu ID.<br>

<h4>Observações:</h4>
 ✔ O ID se encontra no arquivo (database.sqlite) ou será exibido quando efetuar um GET.

________________________________________________________________________________________________________________

# Validação de dados

Foi adicionada as seguintes validações para os dados recebidos nas requisições: <br><br>
<b>[POST] </b> /Endereco/criar <br>

- O campo "pais" deverá receber somente letras <br>
- O campo "estado" deverá receber somente letras<br>
- O campo "cidade" deverá receber somente letras<br>
- O campo "bairro" deverá receber somente letras<br>
- O campo "rua" deverá receber somente letras<br>
- O campo "cep" deverá receber 8 números<br>
- O campo "numero" deverá receber somente numeros inteiros<br><br>

<p align="center"><img src="./readme/burger-dance.gif" alt="hamburger-dance-Gif" width=""></p>
