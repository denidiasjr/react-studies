import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolvers';

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