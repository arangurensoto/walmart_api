const express = require('express')
var router = express.Router()

var { Promotion } = require('../models/promotion')

router.get('/', (req, res) => {
    Promotion.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error in Retriving Promotions :' + JSON.stringify(err, undefined, 2))
        }
    })
})

module.exports = router