export default {
  up: (queryInterface) => {
    queryInterface.bulkInsert('Menu', [
      {
        userId: '8356954a-9a42-4616-8079-887a73455a7f',
        menuId: 'a9fa6cb3-9f5e-46fa-b641-388f898ca824',
        date: '2018-05-06',
        meals: [
          '81211c24-51c0-46ec-b1e0-18db55880958',
          '36d525d1-efc9-4b75-9999-3e3d8dc64ce3',
          'baa0412a-d167-4d2b-b1d8-404cb8f02631',
          'f9eb7652-125a-4bcb-ad81-02f84901cdc3'
        ],
        createdAt: '2018-05-01T00:47:03.687Z',
        updatedAt: '2018-05-01T00:47:03.687Z'
      },
      {
        userId: '8356954a-9a42-4616-8079-887a73455a7f',
        menuId: '1adfcfe7-c66d-42d2-82fd-39c1decd290a',
        date: '2018-04-06',
        meals: [
          'a3c35e8f-da7a-4113-aa01-a9c0fc088539',
          '3ec802c6-0a32-4d29-b27b-42e0f4b532dd'
        ],
        createdAt: '2018-04-06T00:47:03.687Z',
        updatedAt: '2018-04-06T00:47:03.687Z'
      },
      {
        userId: 'ac1b253c-6b33-439b-ab6f-805a4fdd2e05',
        menuId: '3a4fb034-6e52-4bde-9abc-91119a39478d',
        date: '2018-05-07',
        meals: [
          '72a3417e-45c8-4559-8b74-8b5a61be8614'
        ],
        createdAt: '2018-05-01T00:47:03.687Z',
        updatedAt: '2018-05-01T00:47:03.687Z'
      },
      {
        userId: 'ac1b253c-6b33-439b-ab6f-805a4fdd2e05',
        menuId: 'f43f3d49-a6c9-476d-b65a-1af772ff0f36',
        date: '2018-04-06',
        meals: [
          '72a3417e-45c8-4559-8b74-8b5a61be8614',
          '46ced7aa-eed5-4462-b2c0-153f31589bdd'
        ],
        createdAt: '2018-05-01T00:47:03.687Z',
        updatedAt: '2018-05-01T00:47:03.687Z'
      },
      {
        userId: '8356954a-9a42-4616-8079-887a73455a7f',
        menuId: '15421f7a-0f82-4802-b215-e0e8efb6bfb3',
        date: '2018-04-27',
        meals: [
          '91b6e41c-0972-4ac5-86da-4ac1f5226e83',
          'f9eb7652-125a-4bcb-ad81-02f84901cdc3',
          '8a65538d-f862-420e-bcdc-80743df06578'
        ],
        createdAt: '2018-05-01T00:47:03.687Z',
        updatedAt: '2018-05-01T00:47:03.687Z'
      }
    ]);
  },

  down: queryInterface => queryInterface.bulkDelete('Menu', null, {})
};
