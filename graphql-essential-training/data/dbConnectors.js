import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import _ from 'lodash';
import casual from 'casual';

// ENV Variables
dotenv.config();

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL);

const friendsSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  },
});

export const Friends = mongoose.model('friends', friendsSchema);

// SQL
const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: './alien.sqlite'
});

export const Aliens = sequelize.define('aliens', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  planet: {
    type: Sequelize.STRING
  },
});
