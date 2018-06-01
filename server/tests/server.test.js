const expect = require('expect');
const request = require('supertest');
const {ObjectId} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectId(), 
    text:'first text todo'},{
        _id: new ObjectId(), 
    text:'second text todo'},{
        _id: new ObjectId(), 
    text:'third text todo'
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /TODOS', () => {
it('should create new todos ', (done) => {
    var text = 'Test todo Text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
        expect(res.body.text).toBe(text);
    })
    .end((err,res) => {
        if(err)
        {
            return done(err);
        }

        Todo.find({text}).then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
        }).catch((e) => done(e));
    });
});

it('should not create todos with invalid data ', (done) => {

    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res) => {
        if(err)
        {
            return done(err);
        }

        Todo.find().then((todos) => {
            expect(todos.length).toBe(3);
            done();
        }).catch((e) => done(e));
    });
});
});

describe('GET /TODOS', () => {

    it('should get all the todos',(done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
expect(res.body.todos.length).toBe(3);
        })
        .end(done);
    });
});


describe('GET /TODOS/:id', () => {

    it('should get a single todo',(done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end(done);
    });
});