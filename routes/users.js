var express = require('express');
var router = express.Router();
var _ = require('underscore');
var users = require('../module/user');
var q = require('q');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/new', function(req, res, next) {
	q.all([users.formulateInsertQuery(req.body, 'users')]).then(function(queryRes){
		if(queryRes[0]){
			q.all([users.insertFunction(req, res.locals.connection, q, queryRes[0])]).then(function(insertRes){
				if(insertRes[0][0].insertId > 0){
					res.json("success")
				} else {
					res.json("error")
				}
			}).fail(function(err){
				console.log(err.stack)
			})			
		}
	}).fail(function(err){
		console.log(err.stack)
	})
});

module.exports = router;
