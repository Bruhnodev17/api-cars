# api-cars-dealership
Ferramentas utilizadas: Node, Express, Insominia, UUID e Nodemon.
* Todas as rotas são simuladas no Insominia, que simula o front-end da aplicação e liga-se ao arquivo principal (backend);
* Executado pela porta 3333 localhost;

    * <b> POST</b> /: A rota vai receber: marca do carro, nome, ano, e situação( em pátio ), e cadastrar as informações;
    * ![post](https://github.com/Bruhnodev17/api-cars-dealership/assets/150696467/a4eb6257-179e-4f6f-a60b-13623ce726eb)

    * <b>GET</b> /: Irá fazer o levantamento dos carros cadastrados na rota POST com suas respectivas informações;
    * ![get](https://github.com/Bruhnodev17/api-cars-dealership/assets/150696467/67d0ba11-8cdf-4190-abb4-0adfa09eb8fc)

    * <b>PUT </b>/ : Irá alterar algum dado ou mais fornecidos pelos carrros já cadastrados, a partir do seu id. Por exeplo, o ano do GTR 35;
    * ![put](https://github.com/Bruhnodev17/api-cars-dealership/assets/150696467/390329d0-7345-4bf7-b8d8-593f36d48bb6)
     * Quando listarmos novamente na rota GET, A propriedade de ano será alterada!
     * ![put2](https://github.com/Bruhnodev17/api-cars-dealership/assets/150696467/5b8237ee-4704-4900-8268-da87338ae767)

    * <b>DELETE</b> / : Deletará algum carro cadastrado a partir de seu identificador único( id );
    * ![delete](https://github.com/Bruhnodev17/api-cars-dealership/assets/150696467/8d56235c-ceda-4065-b332-97c172939cb6)
    * Quando Listarmos novamente, o carro será deletado. ( No caso o Civic ):
    * ![delete2](https://github.com/Bruhnodev17/api-cars-dealership/assets/150696467/f210d83a-e901-4b0a-85fa-56a2df79e947)


    * <b>PATCH</b> / : Irá alterar o status do carro cadastrado para pronto, com a mensagem de liberação do carro, a partir de seu id inserido na rota.
    * ![patch](https://github.com/Bruhnodev17/api-cars-dealership/assets/150696467/3bf54f83-1de0-483b-825c-6c5b9f2bce5f)
      Quando listarmos novamente, o carro irá alterar o status de que foi liberado!
    * ![patch2](https://github.com/Bruhnodev17/api-cars-dealership/assets/150696467/86e0b1f9-7968-4df3-ad8f-7e1865840f8a)


