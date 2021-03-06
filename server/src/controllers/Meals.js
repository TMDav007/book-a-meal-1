import db from '../models';
import errors from '../../data/errors.json';

/**
 * @exports
 * @class Meals
 */
class Meals {
  /**
   * Returns a list of Meal Opyions
   * @method getMeals
   * @memberof Meals
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   */
  static async getMeals(req, res) {
    const { userId } = req;
    const mealList = await db.Meal.findAll({ where: { userId }, paranoid: true });
    return res.status(200).json({ meals: mealList });
  }

  /**
   * Creates a new item
   * @method create
   * @memberof Meals
   * @param {object} req
   * @param {object} res
   * @param {object} data
   * @returns {(function|object)} Function next() or JSON object
   * date is either equal to today or given date
   */
  static async create(req, res) {
    req.body.userId = req.userId;
    req.body.price = parseFloat(req.body.price);

    const meal = await db.Meal.create(req.body, { include: [db.User] });

    return res.status(201).json(meal);
  }

  /**
   * Updates an existing item
   * @method update
   * @memberof Meals
   * @param {object} req
   * @param {object} res
   * @param {object} data
   * @returns {(function|object)} Function next() or JSON object
   */
  static async update(req, res) {
    const { mealId } = req.params;
    const { userId } = req;

    req.body.price = parseFloat(req.body.price);
    delete req.body.mealId;

    const mealItem = await db.Meal.findOne({ where: { mealId, userId } });

    if (!mealItem) return res.status(404).json({ error: errors[404] });

    const updatedMeal = await mealItem.update({ ...mealItem, ...req.body });

    return res.status(200).json(updatedMeal);
  }

  /**
   * Deletes an existing item
   * @method delete
   * @memberof Meals
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   */
  static async delete(req, res) {
    const { mealId } = req.params;
    const { userId } = req;
    const mealItem = await db.Meal.findOne({ where: { mealId, userId } });

    if (!mealItem) return res.status(404).json({ error: errors[404] });

    await mealItem.destroy();

    return res.status(200).json({ message: 'Meal deleted successfully' });
  }
}

export default Meals;
