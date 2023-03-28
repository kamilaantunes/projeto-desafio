Este projeto está estruturado em três principais pastas, sendo:
    • API-Java-Quarkus: pasta onde poderá ser acessada a API desenvolvida utilizada neste projeto. Essa, possui três principais pastas para caso haja necessidade de realizar atualização na API sendo elas:
        • Controller
        • DTO - data transfer object
        • Entity
        • Service
            Podem ser acessadas em: API-Java-Quarkus > code-with-quarkus > main > java > org > acme
        • O template do projeto foi instalado e configurado através do site oficial da Quarkus (https://code.quarkus.io/), utilizando as configurações:
            Web: RESTEasy Reactive Jackson
            Data: Hibernate ORM with Panache e JDBC Driver - H2
    • ReactJs: pasta que estás armazenando o desenvolvimento web do projeto. Iniciado através do comando "npx create-react-app", utilizando as principais tecnologias: bootstrap, react-router, react-form, comunicação com a API desenvolvida, nodeJS e JavaScript.
    • ReactNative:

#
    API Java Quarkus

        Comando para inicializar API Java com Quarkus: 
            mvn quarkus:dev

        Importante:
            • Ter instalado o Java e Maven;
            • Para compilar o comando, deve estar dentro da pasta do quarkus;
            • Abertura na porta 8080.
            • Atualmente, apenas a porta 3000 está habilitada para acessar a API na porta 8080, conforme a política do CORS. Logo, é importante que a aplicação em reactJS esteja sendo executada na porta 3000, caso contrário, será necessário autorizar a porta no seguinte arquivo:
                API-Java-Quarkus > code-with-quarkus > target > classes application.properties

#
    React JS

        • Aplicação irá realizar o CRUD - create, read, update, delete - na API. Comando para startar o projeto:
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