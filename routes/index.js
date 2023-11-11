var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get(`/exploremore`,function(req,res){
  res.render('explore.ejs')
})

router.get(`/img`,function(req,res){
  res.render('image.ejs')
})


router.get(`/shop`,function(req,res){
  res.render('shop.ejs')
})

router.get(`/Blog`,function(req,res){
  res.render('blog.ejs')
})

router.get(`/About`,function(req,res){
  res.render('about.ejs')
})

router.get(`/contact`,function(req,res){
  res.render('contact.ejs')
})
module.exports = router;
