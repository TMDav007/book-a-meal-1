import { expect } from 'chai';
import isUsersMeal from '../../src/helpers/isUsersMeal';
import { helpers } from '../utils/data';

const userId = '8356954a-9a42-4616-8079-887a73455a7f';
const {
  isUsersMeal: { UUIDArr1, badUUIDArr }
} = helpers;

describe('isUsersMeal', () => {
  it('returns true when item is an array of user\'s meal', async () => {
    const check = await isUsersMeal(UUIDArr1, userId);

    expect(check).to.equal(true);
  });

  it('returns error when mealIds don\'t belong to the user', async () => {
    try {
      await isUsersMeal(badUUIDArr, userId);
    } catch (err) {
      expect(err.message).to.equal('You don\'t have access to Meal 72a3417e-45c8-4559-8b74-8b5a61be8614');
    }
  });
});
