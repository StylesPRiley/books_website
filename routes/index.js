var express = require('express');
var router = express.Router();
var cors = require('cors');

app.get('/without-cors', (req, res, next) => {
  res.json({msg: 'Works! 🎉'})
})

app.get('/with-cors', cors(), (req, res, next) => {
  res.json({msg: 'Works! 🎉'})
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
