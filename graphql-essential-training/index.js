import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Learning GraphQL here on LinkedIn')
})

app.listen(8080, console.log('Listening to 8080 port'))