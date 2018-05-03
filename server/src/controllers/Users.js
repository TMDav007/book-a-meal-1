import uuidv4 from 'uuid/v4';
import moment from 'moment';
import usersDB from '../../data/users.json';
import Authorization from '../middlewares/Authorization';

const defaultUserObject = {
  firstname: null,
  businessName: null,
  email: null,
  password: null, // for testing reference, won't be in real database
  passwordHash: null,
  businessPhoneNo: null,
  businessAddress: null,
  created: null,
  updated: null,
  role: null
};

/**
 * @exports
 * @class Users
 */
class Users {
  /**
   * Registers a new user
   * @method register
   * @memberof Users
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   */
  static async register(req, res) {
    // encrypt password
    const newUser = { ...defaultUserObject, ...req.body };
    newUser.email = req.body.email.toLowerCase();
    newUser.role = req.body.role.toLowerCase();
    newUser.userId = uuidv4();
    delete newUser.password;
    delete newUser.passwordConfirm;
    newUser.created = moment().format();
    newUser.updated = moment().format();

    usersDB.push(newUser);

    delete newUser.passwordHash;

    const token = Authorization.generateToken(req);

    res.status(201).send({ user: newUser, token });
  }

  /**
   * Logs in a user
   * @method login
   * @memberof Users
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   */
  static login(req, res) {
    const authUser = usersDB
      .find(user => user.email === req.body.email && user.password === req.body.password);

    if (!authUser) {
      return res.status(401).send({
        error: 'Invalid Credentials'
      });
    }

    const user = { ...authUser };
    const token = Authorization.generateToken(req);

    delete user.password;
    delete user.passwordHash;

    return res.status(200).send({ user, token });
  }
}

export default Users;
