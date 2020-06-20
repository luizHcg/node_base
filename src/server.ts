import express from 'express'
import User from '@models/User.Model'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: `asd-${new User().Test()}` })
})

app.listen(3333)
