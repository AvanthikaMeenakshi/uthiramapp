var mysqli = require('./mysqli');
var _ = require('underscore');

exports.formulateInsertQuery = function(data, table){
	var fields = [];
	var values = [];
	_.each(data, function(value, key) { 
		fields.push(key)
		values.push("'"+value+"'")
	});
	return table+"("+fields.join(",")+") VALUES("+values.join(",")+")"
}

exports.insertFunction =  function(req,mysql,q, query){
    $mysqli = {query: query};
    strQuery = mysqli.mysqli($mysqli,'insertQuery');
    var deferred = q.defer();
    query =  mysql.query(strQuery,deferred.makeNodeResolver());
    return deferred.promise;
}