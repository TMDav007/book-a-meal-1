import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';
import notAdmin from '../../utils/notAdmin';
import notFound from '../../utils/notFound';
import invalidID from '../../utils/invalidID';
import unAuthorized from '../../utils/unAuthorized';
import { addMenu as data, adminMockToken } from '../../utils/data';

const { menu1, badMenu } = data;

describe('Menu Routes: Edit menu', () => {
  it('should edit a menu for authenticated user', (done) => {
    request(app)
      .put('/api/v1/menu/a9fa6cb3-9f5e-46fa-b641-388f898ca824')
      .set('Accept', 'application/json')
      .set('authorization', adminMockToken)
      .send(menu1)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.include.keys('menuId');
        expect(res.body).to.include.keys('date');
        expect(res.body).to.include.keys('created');
        expect(res.body).to.include.keys('updated');
        expect(res.body.meals[0].mealId).to.equal('72a3417e-45c8-4559-8b74-8b5a61be8614');

        if (err) return done(err);
        done();
      });
  });

  it('should not edit expired menu for authenticated user', (done) => {
    request(app)
      .put('/api/v1/menu/15421f7a-0f82-4802-b215-e0e8efb6bfb3')
      .set('Accept', 'application/json')
      .set('authorization', adminMockToken)
      .send(menu1)
      .end((err, res) => {
        expect(res.statusCode).to.equal(422);
        expect(res.body.error).to.equal('Menu Expired');

        if (err) return done(err);
        done();
      });
  });

  it('should return errors for invalid input', (done) => {
    request(app)
      .put('/api/v1/menu/a9fa6cb3-9f5e-46fa-b641-388f898ca824')
      .set('Accept', 'application/json')
      .set('authorization', adminMockToken)
      .send(badMenu)
      .end((err, res) => {
        expect(res.statusCode).to.equal(422);
        expect(res.body).to.be.an('object');
        expect(res.body.errors.meals.msg).to.equal('Meals must be an array of mealIds');

        if (err) return done(err);
        done();
      });
  });

  invalidID(
    'should return 422 error for invalid meal id', 'menuId',
    request(app), 'put', menu1, '/api/v1/menu/efbbf4ad-c4ae-4134-928d-b5ee305ed5396478', adminMockToken
  );

  notAdmin(
    'should return 403 error for authorized user ie non admin or caterer',
    request(app), 'put', '/api/v1/menu/15421f7a-0f82-4802-b215-e0e8efb6bfb3'
  );

  notFound(
    'should return 404 error for non-existent meal id',
    request(app), 'put', menu1, '/api/v1/menu/4f579f84-53e4-4fc5-a362-956aa36fbfb8', adminMockToken
  );

  unAuthorized(
    'should return 401 error for user without token',
    request(app), 'put', '/api/v1/menu/15421f7a-0f82-4802-b215-e0e8efb6bfb3'
  );
});
