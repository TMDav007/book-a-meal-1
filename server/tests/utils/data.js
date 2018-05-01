import moment from 'moment';

const userMockToken = '68734hjsdjkjksdjkndjsjk78938823sdvzgsuydsugsujsdbcuydsiudsy';
const adminMockToken = '68734hjsdjkjksdjkndjsjk78938823sdvzgsuydsugsup[d73489jsdbcuydsiudsy';
const currentDay = moment().format('YYYY-MM-DD');
const twoDaysTime = moment().add(2, 'days').format('YYYY-MM-DD');

export default {
  currentDay,
  twoDaysTime,
  adminMockToken,
  userMockToken,

  login: {
    existingUser: {
      email: 'iveren@shaguy.com',
      password: 'iverenshaguy',
    },

    nonExistingUser: {
      email: 'favour@shaguy.com',
      password: 'favourshaguy',
    },

    wrongData: {
      email: ''
    }
  },

  signup: {
    rightUserData: {
      role: 'user',
      firstname: 'Favour',
      email: 'favour@shaguy.com',
      password: 'favourshaguy',
      passwordConfirm: 'favourshaguy'
    },

    rightCatererData: {
      role: 'caterer',
      businessName: 'We Cook',
      email: 'wecook@cook.com',
      password: 'wecookgoofood',
      passwordConfirm: 'wecookgoofood',
      businessPhoneNo: '+2348134567890',
      businessAddress: '4, Church Street, Yaba',
    },

    wrongUserData: {
      role: 'user',
      firstname: '',
      email: 'favour@shaguy',
      password: 'favou',
      passwordConfirm: 'favourshaguy',
      businessName: 'Foodie',
      businessPhoneNo: '+2348134567890',
      businessAddress: '4, Church Street, Yaba',
    },

    wrongCatererData: {
      role: 'caterer',
      businessName: '',
      firstname: 'Iveren',
      email: 'food@circle',
      password: 'foodc',
      passwordConfirm: 'foodcircle',
      businessPhoneNo: '+234813456',
    },
  },

  addMeal: {
    newMeal: {
      title: 'Oriental Fried Rice and Turkey',
      description: 'Contains Sea Food',
      price: 2200,
      imageURL: 'images.com/imgurl1.jpeg',
      forVegetarians: false
    },

    badMeal: {
      title: 'Jollof Spaghetti, Plantain and Turkey',
      description: 'Contains %%% Sea Food',
      price: '',
      imageURL: 'images.com/imgurl1.jpeg',
      forVegetarians: 'no'
    },
  },

  editMeal: {
    newMeal: {
      title: 'Jollof Spaghetti, Plantain and Chicken',
      description: 'Contains Sea Food',
      price: 2400,
      imageURL: 'images.com/imgurl4.jpeg',
    },

    badMeal: {
      title: '',
      description: 'Contains %%% Sea Food',
      price: '23yu50',
      imageURL: 'images.com/imgurl1.jpeg',
      forVegetarians: 'no'
    }
  },

  addMenu: {
    menu1: {
      meals: [
        '72a3417e-45c8-4559-8b74-8b5a61be8614',
        '8a65538d-f862-420e-bcdc-80743df06578',
        'f9eb7652-125a-4bcb-ad81-02f84901cdc3',
      ]
    },

    menu2: {
      date: twoDaysTime,
      meals: [
        '72a3417e-45c8-4559-8b74-8b5a61be8614',
        '8a65538d-f862-420e-bcdc-80743df06578',
        'f9eb7652-125a-4bcb-ad81-02f84901cdc3',
      ]
    },

    menu3: {
      date: '2016-01-02',
      meals: [
        '72a3417e-45c8-4559-8b74-8b5a61be8614',
        '8a65538d-f862-420e-bcdc-80743df06578',
        'f9eb7652-125a-4bcb-ad81-02f84901cdc3',
      ]
    },

    badMenu: {
      date: '30-04-2018',
      meals: [
        '72a3417e-45c8-4559ie-8b74-8b5a61be8614',
        '8a65538d-f862-420e78-bcdc-80743df06578',
        'f9eb7652-125a-4bcbuu-ad81-02f84901cdc3',
      ]
    },
  },

  addOrder: {
    newOrder: {
      mealId: '81211c24-51c0-46ec-b1e0-18db55880958',
      deliveryAddress: '4, Church Street, Yaba',
      deliveryPhoneNo: '+2348134567890',
      quantity: 2
    },

    orderWithoutQuantity: {
      mealId: '81211c24-51c0-46ec-b1e0-18db55880958',
      deliveryAddress: '4, Church Street, Yaba',
      deliveryPhoneNo: '+2348134567890',
    },

    badOrder: {
      menuId: '15421f7a-0f82-4802-b215-e0e8efb6bfb38932',
      deliveryAddress: '',
      deliveryPhoneNo: 'disdod',
      quantity: '2'
    },

    orderWithExpiredMenu: {
      menuId: '1adfcfe7-c66d-42d2-82fd-39c1decd290a',
      mealId: 'a3c35e8f-da7a-4113-aa01-a9c0fc088539',
      deliveryAddress: '4, Church Street, Yaba',
      deliveryPhoneNo: '+2348134567890',
      quantity: 2
    },
  }
};
