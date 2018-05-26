const MongoClient = require('mongodb').MongoClient;

 // Object Destruction
//  const {MongoClient,ObjectID } = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
if(err)
{
  return  console.log('unable to connect mongo server...');
}
console.log(' connection to mongo server Successfull.....');
client.collection('Todos').insertOne({text:'text3',completed:'false'});
client.close();
});
