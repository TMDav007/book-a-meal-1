import express from 'express';
import Menu from '../controllers/Menu';
import menuDB from '../dummyData/menu';
import menuValidation from '../validations/menu';
import Authorization from '../middlewares/Authorization';
import ValidationHandler from '../middlewares/ValidationHandler';

const menuRoutes = express.Router();
const menuController = new Menu(menuDB, 'menu');

menuRoutes.post(
  '/', Authorization.authorizeCaterer, menuValidation.create,
  (req, res) => ValidationHandler.validate(req, res, menuController.create)
);

export default menuRoutes;