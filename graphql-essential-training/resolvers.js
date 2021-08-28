import { randomInt } from 'crypto';

const friendsDatabase = {};

class Friend {
  constructor(id, { firstName, lastName, gender, email, contacts }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.contacts = contacts;
  }
}

const resolvers = {
  getFriend: ({ id }) => { 
    return new Friend(id, friendsDatabase[id])
  },
  createFriend: ({ input }) => {
    const id = randomInt(1, 2**47).toString();
    friendsDatabase[id] = input;
    return new Friend(id, input);
  }
}

export default resolvers;