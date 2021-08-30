import { Friends, Aliens } from './dbConnectors';

const resolvers = {
  getFriend: ({ id }) => { 
    return new Friend(id, friendsDatabase[id])
  },
  createFriend: ({ input }) => {
    const newFriend = new Friends({
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