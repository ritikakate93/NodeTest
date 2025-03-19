const mongoose = require('mongoose');

exports.connection = mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('mongodb connect');
}).catch(err =>{
    console.log(err)
})