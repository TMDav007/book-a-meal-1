import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import errors from '../../data/errors.json';
import db from '../models';

config();

/**
 * @exports
 * @class Authorization
 */
class Authorization {
  /**
   * @constructor
   * @param {string} type
   */
  constructor(type) {
    this.type = type;
    this.authorizeRole = this.authorizeRole.bind(this);
  }

  /**
   * @method getToken
   * @memberof Authorization
   * @param {object} req
   * @returns {string} token
   */
  static getToken(req) {
    const bearerToken = req.headers.authorization;
    const token = bearerToken && bearerToken.replace('Bearer ', '');

    return token;
  }

  /**
   * @method generateToken
   * @memberof Authorization
   * @param {object} user
   * @returns {string} token
   * expires in 48 hours
   */
  static generateToken(user) {
    const token = jwt.sign(
      {
        id: user.userId,
        role: user.role,
        email: user.email.toLowerCase(),
      },
      process.env.SECRET,
      {
        expiresIn: 172800
      }
    );

    return token;
  }

  /**
   * Authorize user
   * @method authorize
   * @memberof Authorization
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {(function|object)} Function next() or JSON object
   */
  static authorize(req, res, next) {
    const token = Authorization.getToken(req);

    if (!token) return res.status(401).json({ error: errors['401'] });

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ error: 'User authorization token is expired' });
        }

        return res.status(401).json({ error: 'Failed to authenticate token' });
      }

      const foundUser = await db.User.findOne({ where: { email: decoded.email } });

      if (!foundUser) return res.status(401).json({ error: errors['401'] });

      req.userId = foundUser.userId;
      req.role = foundUser.role;

      return next();
    });
  }

  /**
   * Authorize Specific Role
   * @method authorizeRole
   * @memberof Authorization
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {(function|object)} Function next() or JSON object
   * return 403 forbidden error if user doesn't have required role
   */
  authorizeRole(req, res, next) {
    const { type } = this;

    if (type !== req.role) {
      return res.status(403).json({
        error: errors['403']
      });
    }

    next();
  }
}

export default Authorization;
