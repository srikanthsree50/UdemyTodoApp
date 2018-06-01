const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b0fcaa11c3bf90758b2ff39';

//ObjectId.isValid property used to check id is valid or not

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos ',todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todo ',todo);
// });


// Todo.findById(id).then((todo) => {
//     if(!todo){
//         console.log('Id Not found');  
//     }
//    return console.log('Todo By Id ',todo);
// }).catch((e) =>  console.log(e) );


//DELETING DOCUMENTS .....


// Todo.remove({}).then((todos) => {
//     console.log('Todos ',todos);
// });

// Todo.findOneAndRemove({_id : id}).then((todo) => {

// });


// Todo.findByIdAndRemove(id).then((todo) => {
//     if(!todo){
//         console.log('Id Not found');  
//     }
//    return console.log('Todo By Id deleted',todo);
// }).catch((e) =>  console.log(e) );



