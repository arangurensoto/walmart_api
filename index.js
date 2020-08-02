const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const { mongoose } = require('./db')
var promotionController = require('./controllers/promotionController')

var app = express()
app.use(bodyParser.json())
app.use(cors({ origin: 'https://walmartjavieraranguren.herokuapp.com' }))
app.listen(process.env.PORT || 3000, () => console.log('Server started at port : 3000'))

app.use('/promotions', promotionController)