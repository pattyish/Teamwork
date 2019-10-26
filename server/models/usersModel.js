const users = {
  usersArray: [
    {
      id: '1',
      firstName: 'Elvis',
      lastName: 'Iraguha',
      email: 'iraguhaelvis@gmail.com',
      password: 'mukiza',
      gender: 'Male',
      jobRole: 'Student',
      department: 'Production',
      address: 'Kigali/Rwanda',
    },
    {
      id: '2',
      firstName: 'Olivier',
      lastName: 'Nshimiyimana',
      email: 'nshimiye@student.edu',
      password: 'kenny',
      gender: 'Male',
      jobRole: 'Student',
      department: 'Production',
      address: 'Kigali/Rwanda',
    },
    {
      id: '3',
      firstName: 'Seth',
      lastName: 'Bizimana',
      email: 'bizimana@student.edu',
      password: 'benny',
      gender: 'Male',
      jobRole: 'Student',
      department: 'Production',
      address: 'Kigali/Rwanda',
    },
  ],
  addUser(user) {
    return this.usersArray.push(user);
  },
  findAuthor(key, value) {
    return this.usersArray.find(user => user[key] === value);
  },
  generateId() {
    return this.usersArray.length + 1;
  },
};
export default users;
