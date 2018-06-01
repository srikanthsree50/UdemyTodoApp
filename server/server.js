const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const {ObjectId} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res) => {
var todo = new Todo({ text:req.body.text });
todo.save().then((doc) => {
res.status(200).send(doc);
},(err) => {
    res.status(400).send(err);
})
});

app.get('/todos',(req,res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res) => {
var id = req.params.id;

if(!ObjectId.isValid){
    return res.status(404).send();
}


Todo.findById(id).then((todo) => {
    if(!todo){
        return res.status(404).send();
    }
    res.send({todo});
}).catch((e) =>   res.status(404).send());
});

app.listen(port,() => {
    console.log(`server running at ${port}`);
})


module.exports = {app};