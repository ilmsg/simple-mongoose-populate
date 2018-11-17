const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost/where-the-fish';
const mongodb_options = { useNewUrlParser: true };

mongoose.connect(mongodb_uri, mongodb_options);
mongoose.connection.on('error', (err) => { console.log(err) });
mongoose.connection.on('open', (ref) => { console.log( 'Connected: ' + mongodb_uri ) })
mongoose.connection.on('disconnected', () => { console.log('disconnected.') });
