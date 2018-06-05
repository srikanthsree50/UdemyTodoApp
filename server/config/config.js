var env = process.env.NODE_ENV || 'development';

console.log('env *****',env);

// process.env.MONGOLAB_URI = 'mongodb://TodoDB:TodoDB123@ds111798.mlab.com:11798/todo';

if(env === 'development'){
   process.env.PORT = 8080;
    process.env.MONGOLAB_URI = 'mongodb://localhost:27017/TodoApp';
  }
else if(env === 'test'){
process.env.PORT = 8080;
process.env.MONGOLAB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
