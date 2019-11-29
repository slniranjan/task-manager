// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect database');        
    }

    const db = client.db(databaseName);

    /*deleting data */

    db.collection('users').deleteMany({
        age: 32
    }).then((result) => {
        console.log(result.deletedCount);
    }).catch((error) => {
        console.log(error);
    });

    /*updating data */
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5de087106681e259127620cc")
    // }, {
    //     $set: {
    //         name: 'Dhammika'
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    /*reading data */
    // db.collection('users').findOne({name:'uven'}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to read user data');
    //     }
    //     console.log(user);
    // });

    // db.collection('users').find({name:'Niranjan'}).toArray((error, users) => {
    //     if(error) {
    //         return console.log('Unable to read user data');
    //     }
    //     console.log(users);
    // });

    // db.collection('users').find({name:'Niranjan'}).count((error, count) => {
    //     if(error) {
    //         return console.log('Unable to read user data');
    //     }
    //     console.log(count);
    // });

    /*inserting data */
    // db.collection('users').insertOne({
    //     _id: id,
    //    name: 'Niran',
    //    age: '32' 
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'shani',
    //         age: 32
    //     },
    //     {
    //         name: "uven",
    //         age: 2
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log("Unable to insert users");
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log("Unable to insert tasks");
    //     }
    //     console.log(result.ops);
    // });
});
