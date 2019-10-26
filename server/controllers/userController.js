import Helper from '../helpers/authorHelper';
import userModel from '../models/usersModel';
import User from '../models/userStorage';

class UserControl {
  signUp(req, res) {
    const userInfo = req.body;
    const { value, error } = Helper.signUpUserValidation(userInfo);
    if (error) return res.status(404).json({ status: '404', message: error.details[0].message });
    const emailTaken = userModel.findAuthor('email', userInfo.email);
    if (emailTaken) return res.status(404).json({ status: '404', message: 'email already exist' });
    const newUser = new User(value);
    userModel.addUser(newUser);
    const token = Helper.generateToken(newUser);
    const UserCreated = newUser.dislayUser();
    res.status(200).json({
      status: '200',
      message: 'user created successfull',
      data: {
        token,
        UserCreated,
      },
    });
  }

  signIn(req, res) {
    const userCredentail = req.body;
    const { error } = Helper.signUserValidation(userCredentail);
    if (error) return res.status(404).json({ status: '404', message: error.details[0].message });
    const emailMatch = userModel.findAuthor('email', userCredentail.email);
    if (!emailMatch) return res.status(400).json({ status: '400', message: 'email is incorrect' });
    const matchPassword = Helper.comparePassword(userCredentail.email, emailMatch.email);
    if (!matchPassword) return res.status(400).json({ status: '400', message: 'email doesn\'t match' });
    const token = Helper.generateToken(emailMatch);
    return res.status(201).json({
      status: '201',
      message: 'user login successfull',
      data: {
        token,
      },
    });
  }
}
export default UserControl;
