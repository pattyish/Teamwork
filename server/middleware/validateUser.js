import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
class Authorize {
  isValidToken(req, res, next) {
    try {
      const token = req.headers.authentication.split(' ')[1];
      const decode = jwt.verify(token, process.env.MY_SECRET_KEY);
      req.token = decode;
      next();
    } catch (error) {
      res.status(401).json({
        message: 'invalid token',
      });
    }
    return req.token;
  }
}
export default Authorize;
