import stringToArray from './stringToArray';
import isMealAvailable from './isMealAvailable';

/**
 * Function to check if meal item is valid
 * A meal item is valid if it is available in the menu for the day
 * @param {array} items
 * @param {object} req
 * @return {bool} returns false or true
 */
async function isValidOrderItems(items, req) {
  const err = [];
  items = stringToArray(items, ',');
  // check mealId availability
  const promises = items.map(item => isMealAvailable(item, req.body.date).then((mealAvai) => {
    if (!mealAvai) err.push(`Meal ${item} is not available`);
  }));


  await Promise.all(promises);
  if (err.length === 0) return true;
  throw new Error(err);
}

export default isValidOrderItems;
