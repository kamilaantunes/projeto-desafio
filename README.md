• O projeto consiste em desenvolver um CRUD (create, read, update e delete) de um cadastro de pessoas. Para isso, foi-se necessário o desenvolvimento de uma API (application programming interface) utilizando Java com o framework quarkus. As interfaces foram criadas nas tecnologias: React.js e React Native.

#
Este projeto está estruturado em três principais pastas, sendo: <br />
>
     • **API-Java-Quarkus**: pasta onde poderá ser acessada a API desenvolvida utilizada neste projeto. Essa, possui três principais pastas para caso haja necessidade de realizar atualização na API sendo elas: <br />
          * Controller <br />
          * DTO - data transfer object <br />
          * Entity <br />
          * Service<br />
                 - As pastas podem ser acessadas em: **API-Java-Quarkus > code-with-quarkus > main > java > org > acme**
          * O template do projeto foi instalado e configurado através do site oficial da Quarkus (https://code.quarkus.io/), utilizando as configurações: <br />
               - Web: RESTEasy Reactive Jackson <br />
               - Data: Hibernate ORM with Panache e JDBC Driver - H2 <br />
     • **ReactJs**: pasta que estás armazenando o desenvolvimento web do projeto. Iniciado através do comando "npx create-react-app", utilizando as principais tecnologias: bootstrap, react-router, react-form, comunicação com a API desenvolvida, nodeJS e JavaScript.
     • **ReactNative**:

#
    API Java Quarkus

        • Comando para inicializar API Java com Quarkus: 
            mvn quarkus:dev

        * Importante:
            • Ter instalado o Java e Maven;
            • Para compilar o comando, deve estar dentro da pasta do quarkus;
            • Abertura na porta 8080 (importante garantir a execução nessa porta para que não seja necessário alteração de rotas no código).

#
    React JS

        • Aplicação irá realizar o CRUD - create, read, update, delete - na API. 
            • Instalar as depedências:
               npm install
            • Comando para startar o projeto:
               npm start || yarn start
        • Ao acessar a aplicação, será visualizada a página inicial, nomeada como home onde será possível verificar:
            • Sidebar: com as principais rotas da aplicação: home e listagem dos usuários;
            • Formulário para cadastrar usuários, com os campos: Nome, idade, e-mail, cidade, estado, escolaridade e observação. Ao preencher e salvar o formulários, os dados serão enviados para a API;
            • Imagem representativa da empresa responsável pelo desafio;
            • Ao navegar pela sidebar, será possível acessar ainda a página de lista, onde retorna os dados cadastrados na API em forma de tabela, além dos dados é possível verificar duas ações:
                • Update: representado pelo ícone de pincel, que ao clicar redirecionar o usuário para a página de atualização do usuário;
                • Delete: representado pelo ícone de uma lixeira, ao clicar e confirmar será excluído o usuário da lista e consequentemente da API.
        • O projeto está estruturado nas principais pastas:
            • Components: onde armazenará componentes importantes da aplicação e que irá ser renderizado em mais de uma página;
            • Img: imagens utilizadas no desenvolvimento;
            • Pages: desenvolvimento das páginas que compõe o projeto.

#
    ReactNative
    
        • O projeto desenvolvido em react native, também consiste em um CRUD que realizará requisições para a API desenvolvida anteriormente em Java. Este, por sua vez, tem objetivo de execução os aplicativos em dispositivos móveis. Recomenda-se a utilização do aplicativo expo para poder visualizar a interface, com a pasta aberta digite o comando:
          expo start | Comando irá gerar um QR Code, basta ler com o auxílio de uma camêra do celular e irá redirecionar para o aplicativo do expo e abertura da aplicação.
        • A aplicação pode ser encontrada no arquivo **app.js**, com as principais funcionalidade: cadastrar usuário, leitura dos dados, atualizar e deletar usuários.
        
#

> Kamila Antunes | kamilaantunes1@gmail.com | https://www.linkedin.com/in/kamila-antunes/
