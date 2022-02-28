var express = require('express');
var router = express.Router();
const lodash= require('lodash')

/* GET home page. */
router.get('/', (req, res)=>{
  var test = lodash.chunk(['a', 'b', 'c', 'd'], 1)
  console.log(lodash.now())

});

module.exports = router;
