const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
if(err)
{
  return  console.log('unable to connect mongo server...');
}
console.log(' connection to mongo server Successfull.....');

//delete many --duplicates all matching records

// db.collection('Todos').deleteMany({text:'something to do'}).then((result) => {
//     console.log(result);
// });

//delete one -- single delete but not logged to console

//db.collection('Todos').deleteOne({text:'text'});

//findone and delete --single delete and logged to console


db.collection('Todos').findOneAndDelete({text:'text'}).then((result) => {
    console.log(result);
});
db.close();
});
