const express = require('express')
const app = express()
const tasks = require('./routs/tasks')
const connectdb = require('./db/connect')
require('dotenv').config()
//middleware
app.use(express.static('./public'))
app.use(express.json()) // help to put data in req.body

app.use('/api/v1/tasks', tasks)
const start = async () => {
  try {
    await connectdb(process.env.MONGO_URI)

    app.listen(5000, console.log('Server is listening at port 5000...'))
  } catch (error) {
    console.log(error)
  }
}
start()
