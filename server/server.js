const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
type:String,
required:true,
minlength:1,
trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
type:Number,
default:null
    }
});

var newTodo = new Todo({
   text:'eat dinner',
   completed:true,
   completedAt:123
});

newTodo.save().then((doc) => {
console.log('Todo Saved ',doc);
},(e) => {
console.log('cannot save Todo ');
});

