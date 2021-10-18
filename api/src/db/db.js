const mongoose = require('mongoose');
const {MONGO_DB_USERNAME, MONGO_DB_PASSWORD} = require('./../../env.dev');

exports.start = async () => {
   await mongoose.connect(`mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@cluster0.cmjkt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

   `);
}
