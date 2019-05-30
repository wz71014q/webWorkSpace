let express = require('express');

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: '<b>Express</b>',
    isShow: true,
    content: '用户名'
  });
});

module.exports = router;
