import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import dotenv from 'dotenv';

dotenv.config();
class Helper {
  generateToken(user) {
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.MY_SECRET_KEY, { expiresIn: '1d' });
    return token;
  }

  hashPassword(password) {
    return bcrypt.hash(password, 10);
  }

  comparePassword(enteredPass, hashed) {
    return bcrypt.compare(enteredPass, hashed);
  }

  signUserValidation(body) {
    const schema = {
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    };
    return Joi.validate(body, schema);
  }

  signUpUserValidation(body) {
    const schema = {
      firstName: Joi.string().min(4).required(),
      lastName: Joi.string().min(4).required(),
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      gender: Joi.string().min(3).required(),
      jobRole: Joi.string().min(3).required(),
      department: Joi.string().min(3).required(),
      address: Joi.string().min(3).required(),
    };
    return Joi.validate(body, schema);
  }
}
export default new Helper();
