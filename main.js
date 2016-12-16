//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'test'
});

connection.connect();

//插入
var user = {
	name:"qian",
	password:12345
};
connection.query("insert into users set ?",user,function(err,result){
	if (err) throw err;
	console.log("inserted qian");
	console.log(result);
	console.log("/n");
})   
//更新
var a = "zhao";
var b = "li";
connection.query("update users set name='"+b+"'where name ='"+a+"'",function(err,result){
	if(err) throw err;
	console.log("update zhao/s name to li");
});

//删除
var c="qian"
connection.query('delete from users where name="'+c+'"',function(err, result) {
if (err) throw err;
console.log('deleted qian');
console.log(result);
console.log('\n');
});
//查询
connection.query('select * from `users`', function(err, rows, fields) {
    if (err) throw err;
    console.log('查询结果为: ', rows);
    console.log(rows[0].name);
});


//关闭连接
connection.end(); 