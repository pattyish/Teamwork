import usersModel from './usersModel';
import Helper from '../helpers/authorHelper';


class User {
  constructor(user) {
    this.id = usersModel.generateId();
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = Helper.hashPassword(user.password);
    this.gender = user.gender;
    this.jobRole = user.jobRole;
    this.department = user.department;
    this.address = user.address;
  }

  dislayUser() {
    return ({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      gender: this.gender,
      jobRole: this.jobRole,
      department: this.department,
      address: this.address,
    });
  }
}

export default User;
