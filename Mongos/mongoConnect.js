const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
if(err)
{
  return  console.log('unable to connect mongo server...');
}
console.log(' connection to mongo server Successfull.....');

client.close();
});
