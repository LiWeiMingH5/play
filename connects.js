function Connect() {
	//连接数据库
	var mysql = require('mysql');
	var connection;
	var config;
//	this.setconfig=function(url){
//		config = require("./config.json");
//	}
	this.connection = function() {
		config = require("./config.json");
		connection = mysql.createConnection(config);
		connection.connect();
		return connection;
	};
	this.close = function(){
		connection.end();
	};
}

module.exports = Connect;