// Import the mongoose module
var mongoose = require('mongoose');

let dbConfig = {
  server: {
        port: process.env.PORT || 5001,
        hostname: process.env.HOSTNAME || '127.0.0.1',
    },
    database: {
      url: 'mongodb://127.0.0.1:27017',
      connectionOptions: {
        dbName: 'test',
        pass: 'admin',
        user: 'admin',
      }
    }
}

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.database.url, dbConfig.database.connectionOptions);

const db = mongoose.connection;

db.on('error', () =>{
    console.log(`MongoDB Connection Error ${dbConfig.database.url}`);
    process.exit(1);
});

db.once('open', () => {
    console.log(`MongoDB Connection Successful ${dbConfig.database.url}`);
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(`MongoDB Connection Closed ${dbConfig.database.url}`);
        process.exit(0);
    });
});

module.exports = db;