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
    db.collection('todos').findOneAndUpdate({
        _id: new ObjectID('5b0b8da563c7e93c34052301')
      }, {
        $set: {
          completed: true
        }
       
      }, {
        returnOriginal: false
      }).then((result) => {
        console.log(result);
      });
    
    
    //client.close();

});