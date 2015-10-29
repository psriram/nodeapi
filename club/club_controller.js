var clubModel = require("./club_model");

module.exports.getClubCategories = function(params,callback){
	 console.log("getting club categories");
 	 clubModel.getCategories(callback);

}