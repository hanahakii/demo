var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/link', (req, res) => {
  res.render('link');
});
router.get('/api', (req, res) => {
  var data = {
    
  }
});

module.exports = router;
