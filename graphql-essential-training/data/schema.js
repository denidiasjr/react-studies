import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    email: String
    language: String
    contacts: [Contact]
  }

  type Alien {
    id: ID
    firstName: String
    lastName: String
    planet: String
  }

  type Contact {
    firstName: String
    lastName: String
    email: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Query {
    getFriend(id: ID): Friend
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    email: String
    language: String
    contacts: [ContactInput]
  }

  input ContactInput {
    firstName: String
    lastName: String
    email: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
  }
`);

export default schema;