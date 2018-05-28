//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");
//var obj = new ObjectID();
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return console.log("error................");
    }
    console.log("server connected!!!!!!!!!!!!!!!!!!!!");
    db = client.db('TodoApp');
    // db.collection('todos').find({_id:new ObjectID('5b0c1f9961edcc8498c1c5bc')}).toArray().then((docs)=>{
    //     console.log("todos........");
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{console.log("error found in fetching tods:",err)});

    db.collection('todos').deleteMany({text:'eat lunch'}).then((count)=>{
     
        console.log(count);
    },(err)=>{console.log("error found in deleting tods:",err)});
    
    
    //client.close();

});