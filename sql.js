var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '10.2.152.169',
    user: 'root',
    password: 'root',
    database:'h5',
    port: 3306
});
conn.connect();

//条件查询
//var idVal = 1;
//var findByIdSQL = "SELECT  id,username,password from t_user where id="+idVal;
//conn.query(findByIdSQL, function(err, rows) {
//  if (err) throw err;
//  var row = rows[0];
//	console.log("******************findById*******************");
//  console.log(row.id+":"+row.username+":"+row.password);
//});

//插入数据
//var usernameVal = 'test1';
//var passwordVal = 'test1';
//var insertSQL = "insert into t_user(username,password) values('"+usernameVal+"','"+passwordVal+"')";
//console.log(insertSQL);
//conn.query(insertSQL, function(err, res) {
//  if (err) throw err;
//	console.log("******************insert*******************");
//  console.log(res);
//  console.log("insert success!")
//});

//删除数据
//var delId = 2;
//var delSQL = "delete from t_user where id="+delId;
//console.log(delSQL);
//conn.query(delSQL, function(err, res) {
//  if (err) throw err;
//	console.log("******************delete*******************");
//  console.log(res);
//  console.log("delete success!")
//});

//修改数据

var newUsernameVal = 'admin';
var newPasswordVal = '123';
var updateId = 3;
var updateSQL = "update t_user set username='"+newUsernameVal+"',password='"+newPasswordVal+"' where id="+updateId;
console.log(updateSQL);
conn.query(updateSQL, function(err, res) {
    if (err) throw err;
	console.log("******************update*******************");
    console.log(res);
    console.log("update success!")
});

//查询所有
var findAllSQL = "SELECT  id,username,password from t_user";
conn.query(findAllSQL, function(err, rows) {
    if (err) throw err;
    console.log("******************findAll*******************");
    for(i in rows){
    var row = rows[i];
    console.log(row.id+":"+row.username+":"+row.password);
    }
});

conn.end();