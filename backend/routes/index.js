var express = require('express');
var router = express.Router();
const {db} = require('../db')

/* GET home page. */
router.post('/sentence', function(req, res, next) {
  
});


/**Return sentences for given year */
router.get('/sentences', async function(req,res,next){
  const result = await db.any(`SELECT 'TEST'`);
  res.send(result);

});

module.exports = router;
