//mongodb+srv://admin:<password>@cluster0.w7qgo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose');

exports.start = async () => {
   await mongoose.connect('//mongodb+srv://admin:TiHd5u2Sfy*spFt@cluster0.w7qgo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}
