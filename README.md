# CMS BRAVE

Projeto tem por objetivo criar um CMS que sirva como um ponto de partida para os produtos que utilizem algum gerenciamento de conteúdo.

API construída utilizando TDD como metodologia de trabalho, Clean Architecture para fazer a distribuição de responsabilidades em camadas, sempre que possível seguindo os princípios do SOLID e aplicando alguns Design Patterns para resolver alguns problemas.
> ## BOAS PRÁTICAS

Nesse projeto estamos utilizando eslint para code style e Conventional Commits.<br>
Padrão de commits:
- `feat: commit message`
- `fix: commit message`
- `docs: commit message`
- `style: commit message`
- `refactor: commit message`
- `test: commit message`
- `chore: commit message`
- `perf: commit message`
- `ci: commit message`
- `build: commit message`
- `temp: commit message`


>  ### Principais ferramentas utilizadas ⚙️ :

⚠️ Nesse projeto é utilizado a lib Husky js para verificação de lint e execução de testes antes do envio para o repositório.
* NPM
* Docker
* Mysql
* Sequelize
* Bcrypt
* Swagger
* Express
* Jest
* git-commit-msg-linter
* Eslint
* Jsonwebtoken
* Winston

>  ### Setup ⚙️ :

Para executar o projeto em modo de desenvolvimento, é preciso somente clonar o repositório, criar os arquivos para adicionar as variáveis de ambiente, rodar o comando `npm i` e depois `npm run up`. <br>
Ao subir o projeto ele deve criar um banco de desenvolvimento de acordo com os scritps que estão na basta `scripts/schema.sql`. <br>

> ⚠️  🐳   -  Verifique se as imagens do Mysql e NodeJS foram baixadas corretamente no momento em que os containers subirem.