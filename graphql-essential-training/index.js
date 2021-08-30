import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';
import resolvers from './data/resolvers';

const app = express();

app.get('/', (req, res) => {
  res.send('Learning GraphQL here on LinkedIn');
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true 
}))

app.listen(8080, console.log('Listening to 8080 port'))