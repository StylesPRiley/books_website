var express = require('express');
var router = express.Router();
var cors = require('cors');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
app.get('/without-cors', (req, res, next) => {
  res.json({msg: 'Works! 🎉'});
});

app.get('/with-cors', cors(), (req, res, next) => {
  res.json({msg: 'Works! 🎉'});
});

module.exports = router;
