import { Friends, Aliens } from './dbConnectors';

const resolvers = {
  getFriend: ({ id }) => new Promise((resolve, reject) => {
    Friends.findById(id, null, null, (err, friend) => {
      if (err) {
        return reject(err);
      }

      resolve(friend);
    })
  }),
  getAliens: () => Aliens.findAll(),
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
          return reject(err);
        }

        resolve(newFriend);
      });
    });
  },
  updateFriend: ({ input }) => new Promise((resolve, reject) => {
    Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
      if (err) {
        return reject(err);
      }

      resolve(friend);
    })
  }),
  deleteFriend: ({ id }) => new Promise((resolve, reject) => {
    Friends.remove({ _id: id }, (err) => {
      if (err) {
        return reject(err);
      }

      resolve('Friend deleted successfully.');
    })
  }),
}

export default resolvers;