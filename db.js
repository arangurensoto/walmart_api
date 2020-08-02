const mongoose = require('mongoose')

mongoose.connect('mongodb://heroku_q4s194gg:Yevier24@ds011409.mlab.com:11409/heroku_q4s194gg',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function(error){
        if(error){
            console.log(error)
        } else {
            console.log('Connnected to the database Javier')
        }
    })

module.exports = mongoose