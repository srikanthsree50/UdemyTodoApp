const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

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

app.listen(port,() => {
    console.log(`server running at ${port}`);
})


module.exports = {app};