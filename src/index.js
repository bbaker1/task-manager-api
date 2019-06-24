const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// Express Middleware
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled.')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Please check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const main = async () => {
    // const task = await Task.findById('5d08562e3eed4a09f4da9c3e')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

//     const user = await User.findById('5d08560c3eed4a09f4da9c3b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()