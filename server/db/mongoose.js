const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://TodoDB:TodoDB123@ds111798.mlab.com:11798/todo'
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};