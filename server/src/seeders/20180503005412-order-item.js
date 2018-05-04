export default {
  up: (queryInterface) => {
    queryInterface.bulkInsert(
      'OrderItems',
      [
        {
          id: 1,
          mealId: '46ced7aa-eed5-4462-b2c0-153f31589bdd',
          orderId: 'fb097bde-5959-45ff-8e21-51184fa60c25',
          quantity: 2,
          created: '2018-04-06T14:34:90.000',
          updated: '2018-04-06T14:34:90.000'
        },
        {
          id: 2,
          mealId: '36d525d1-efc9-4b75-9999-3e3d8dc64ce3',
          orderId: 'fb097bde-5959-45ff-8e21-51184fa60c25',
          quantity: 1,
          created: '2018-04-06T14:34:90.000',
          updated: '2018-04-06T14:34:90.000'
        },
        {
          id: 3,
          mealId: '72a3417e-45c8-4559-8b74-8b5a61be8614',
          orderId: 'fb097bde-5959-45ff-8e21-51184fa60c25',
          quantity: 2,
          created: '2018-04-06T14:34:90.000',
          updated: '2018-04-06T14:34:90.000'
        },
        {
          id: 4,
          mealId: 'a3c35e8f-da7a-4113-aa01-a9c0fc088539',
          orderId: '6ed0963f-9663-4fe2-8ad4-2f06c6294482',
          quantity: 2,
          created: '2018-05-06T14:34:90.000',
          updated: '2018-05-06T14:34:90.000'
        },
        {
          id: 5,
          mealId: 'baa0412a-d167-4d2b-b1d8-404cb8f02631',
          orderId: '6ed0963f-9663-4fe2-8ad4-2f06c6294482',
          quantity: 2,
          created: '2018-05-06T14:34:90.000',
          updated: '2018-05-06T14:34:90.000'
        }
      ]
    );
  },

  down: queryInterface => queryInterface.bulkDelete('OrderItems', null, {})
};
