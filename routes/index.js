var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/loginuser', function(req, res, next) {
	console.log("req.session.user")
	console.log(req.session.user)
	if(req.session.user){
  		res.json(req.session.user);
	} else {
		res.json("no user");
	}
});


router.get('/cities', function(req, res, next) {
	
});

module.exports = router;
