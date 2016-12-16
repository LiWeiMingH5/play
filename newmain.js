var express = require("express");
var app = express();
var http = require("http");
var fs = require("fs");
var bodyParser = require("body-parser");
var urlencodedParse = bodyParser.urlencoded({
	extended: false
});
//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

var server = app.listen(8888, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test'
});

connection.connect();

//查询
connection.query('select * from `users`', function(err, rows, fields) {
	if(err) throw err;
	console.log('查询结果为: ', rows);
	app.post('/check', urlencodedParse, function(request, response) {

		//1-将get请求变成post请求

		//2-从req中读取nameVal,passwordVal,professionVal,idVal

		var name = request.body.name;
		var passwords = request.body.password;

		// 读取数据库中的数据
		var flag=false;
		for( i in rows){
			if(name==rows[i].name&&passwords==rows[i].password){
				flag=true;
				
				break;
			}
		}
		console.log(flag);
		response.send(flag);
		response.end();
	});
});

//关闭连接
connection.end();

