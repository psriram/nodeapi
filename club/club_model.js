var mysql = require("mysql"); 

var con = mysql.createConnection({
              host: "localhost",
              user: "root",
              password: "root",
              database: "act_finder"
            });

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

module.exports.getCategories = function(callback){
	var sql = "select * from categories";
    con.query(sql,function(err,rows){
    	 if(err) throw err;
    	 callback(rows);
          //if(err) res.send(err)
          //res.json(rows); 

    });
}
