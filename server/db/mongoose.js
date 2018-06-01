const mongoose = require('mongoose');
const MONGOLAB_URI = 'mongodb://TodoDB:TodoDB123@ds111798.mlab.com:11798/todo'
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI);

//for testing test database with sample data
//process.env.NODE_ENV === 'test'

// for production environment i.e on heroku by itself automatically
//process.env.NODE_ENV === 'production'

// for development by developers in local ide
//process.env.NODE_ENV === 'development'





module.exports = {mongoose};