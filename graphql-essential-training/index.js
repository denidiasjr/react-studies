import express from 'express'
import schema from './schema'
import { graphqlHTTP } from 'express-graphql'

const app = express()

app.get('/', (req, res) => {
  res.send('Learning GraphQL here on LinkedIn')
})

const root = { hello: () => "Hi, my name is Deni!"}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true 
}))

app.listen(8080, console.log('Listening to 8080 port'))