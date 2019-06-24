// NOT USED IN THE ACTUAL APP

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('users').findOne({ name: 'Keaton' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 21 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 21 }).count((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5cf881e86dae8812257911a3") }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //      _id: new ObjectID("5cf881113ad80d121a3bdb94") 
    //     }, {
    //         $set: {
    //             name: "Benjamin"
    //         }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

//     db.collection('users').updateOne({
//         _id: new ObjectID("5cf881113ad80d121a3bdb94") 
//        }, {
//            $inc: {
//                age: 1
//            }
//    }).then((result) => {
//        console.log(result)
//    }).catch((error) => {
//        console.log(error)
//    })

//    db.collection('tasks').updateMany({
//        completed: false
//    }, {
//        $set: {
//            completed: true
//        }
//    }).then((result) => {
//        console.log(result)
//    }).catch((error) => {
//        console.log(error)
//    })

    db.collection('users').deleteMany({
        age: 21
    }).then((result) => {
        console.log(result)
    }).catch((error) => {   
        console.log(error)
    })

    db.collection('tasks').deleteOne({
        description: 'Walk dog'
    }).then((result) => {

    }).catch((error) => {
        console.log(error)
    })
})