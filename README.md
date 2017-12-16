## TCC
Projeto desenvolvido como trabalho de conclusão de curso para minha graduação em Análise e Desenvolvimento de Sistemas. O sistema consiste em uma aplicação para efetuar simulados online.


## Demo
https://pure-dusk-21159.herokuapp.com/

## Iniciando a Aplicação
Criar um banco de dados com o nome `ARANDU` com permissão de escrita e leitura para o usuário `root` e sem senha. Após isto, basta executar o seguinte comando na pasta do projeto:
```
npm install && npm start
```
Após a instalação das dependências e a inicialiazação do servidor, abrir o seguinte endereço no navegador:
` http://localhost:5000 `

## Configuração do BD
Caso necessite alterar as configurações do banco de dados, basta alterar o código na linha 4 em `models/index.js`. Os dados estão na seguinte ordem:

```
new Sequelize('database', 'username', 'password', {dialect: 'mysql'})
```

Para mais informações, consulte a documentação do Sequelize.
