//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");
//var obj = new ObjectID();
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return console.log("error................");
    }
    console.log("server connected!!!!!!!!!!!!!!!!!!!!");
    db = client.db('TodoApp');
    db.collection('todos').insertOne({
        text:'todo sometthing ew',
        completed: false
    },(err,results)=>{
        if(err){
            return console.log("error................", err);
        }

        console.log(JSON.stringify(results.ops[0]._id.getTimestamp()));
    });
    client.close();

});