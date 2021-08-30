import { randomInt } from 'crypto';

const friendsDatabase = {};

class Friend {
  constructor(id, { firstName, lastName, gender, age, email, contacts, language }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.email = email;
    this.contacts = contacts;
    this.language = language;
  }
}

const resolvers = {
  getFriend: ({ id }) => { 
    return new Friend(id, friendsDatabase[id])
  },
  createFriend: (root, { input }) => {
    const newFriend = new Friend({
      firstName: input.firstName,
      lastName: input.lastName,
      gender: input.gender,
      age: input.age,
      email: input.email,
      contacts: input.contacts,
      language: input.language,
    });

    newFriend.id = newFriend._id;

    return new Promise((resolve, reject) => {
      newFriend.save(err => {
        if (err) {
          return reject();
        }

        resolve(newFriend);
      });
    });
  }
}

export default resolvers;