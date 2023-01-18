
require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname,'.../build')));
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, '.../build/', 'index.html'));
// })

app.get('/api/list', (req,res) => {
	const sqlQuery = 'SELECT * FROM labtime';
	db.query(sqlQuery, (err, result) => {
		res.send(result);
		console.log(result);
	});
})
app.post('/api/update_01', (req,res) => {
	console.log(req.body)
	var user_name = req.body.user_name;
	var company_name = req.body.company_name;
	var company_dept = req.body.company_dept;
	var labtime = req.body.labtime;
	const sqlQuery = 'UPDATE labtime SET user_name=?, company_name=?, company_dept=?, labtime=? WHERE idx=1'
	db.query(sqlQuery, [user_name,company_name,company_dept,labtime], (err, result) => {
		res.send(result);
		console.log(result);
	})
})
app.post('/api/update_02', (req,res) => {
	console.log(req.body)
	var user_name = req.body.user_name;
	var company_name = req.body.company_name;
	var company_dept = req.body.company_dept;
	var labtime = req.body.labtime;
	const sqlQuery = 'UPDATE labtime SET user_name=?, company_name=?, company_dept=?, labtime=? WHERE idx=2'
	db.query(sqlQuery, [user_name,company_name,company_dept,labtime], (err, result) => {
		res.send(result);
		console.log(result);
	})
})
app.post('/api/update_03', (req,res) => {
	console.log(req.body)
	var user_name = req.body.user_name;
	var company_name = req.body.company_name;
	var company_dept = req.body.company_dept;
	var labtime = req.body.labtime;
	const sqlQuery = 'UPDATE labtime SET user_name=?, company_name=?, company_dept=?, labtime=? WHERE idx=3'
	db.query(sqlQuery, [user_name,company_name,company_dept,labtime], (err, result) => {
		res.send(result);
		console.log(result);
	})
})
app.post('/api/update_04', (req,res) => {
	console.log(req.body)
	var user_name = req.body.user_name;
	var company_name = req.body.company_name;
	var company_dept = req.body.company_dept;
	var labtime = req.body.labtime;
	const sqlQuery = 'UPDATE labtime SET user_name=?, company_name=?, company_dept=?, labtime=? WHERE idx=4'
	db.query(sqlQuery, [user_name,company_name,company_dept,labtime], (err, result) => {
		res.send(result);
		console.log(result);
	})
})
app.post('/api/update_05', (req,res) => {
	console.log(req.body)
	var user_name = req.body.user_name;
	var company_name = req.body.company_name;
	var company_dept = req.body.company_dept;
	var labtime = req.body.labtime;
	const sqlQuery = 'UPDATE labtime SET user_name=?, company_name=?, company_dept=?, labtime=? WHERE idx=5'
	db.query(sqlQuery, [user_name,company_name,company_dept,labtime], (err, result) => {
		res.send(result);
		console.log(result);
	})
})
app.post('/api/update_06', (req,res) => {
	console.log(req.body)
	var user_name = req.body.user_name;
	var company_name = req.body.company_name;
	var company_dept = req.body.company_dept;
	var labtime = req.body.labtime;
	const sqlQuery = 'UPDATE labtime SET user_name=?, company_name=?, company_dept=?, labtime=? WHERE idx=6'
	db.query(sqlQuery, [user_name,company_name,company_dept,labtime], (err, result) => {
		res.send(result);
		console.log(result);
	})
})
app.post('/api/update_07', (req,res) => {
	console.log(req.body)
	var user_name = req.body.user_name;
	var company_name = req.body.company_name;
	var company_dept = req.body.company_dept;
	var labtime = req.body.labtime;
	const sqlQuery = 'UPDATE labtime SET user_name=?, company_name=?, company_dept=?, labtime=? WHERE idx=7'
	db.query(sqlQuery, [user_name,company_name,company_dept,labtime], (err, result) => {
		res.send(result);
		console.log(result);
	})
})
app.post('/api/update_08', (req,res) => {
	console.log(req.body)
	var user_name = req.body.user_name;
	var company_name = req.body.company_name;
	var company_dept = req.body.company_dept;
	var labtime = req.body.labtime;
	const sqlQuery = 'UPDATE labtime SET user_name=?, company_name=?, company_dept=?, labtime=? WHERE idx=8'
	db.query(sqlQuery, [user_name,company_name,company_dept,labtime], (err, result) => {
		res.send(result);
		console.log(result);
	})
})
app.post('/api/update_09', (req,res) => {
	console.log(req.body)
	var user_name = req.body.user_name;
	var company_name = req.body.company_name;
	var company_dept = req.body.company_dept;
	var labtime = req.body.labtime;
	const sqlQuery = 'UPDATE labtime SET user_name=?, company_name=?, company_dept=?, labtime=? WHERE idx=9'
	db.query(sqlQuery, [user_name,company_name,company_dept,labtime], (err, result) => {
		res.send(result);
		console.log(result);
	})
})
app.post('/api/update_10', (req,res) => {
	console.log(req.body)
	var user_name = req.body.user_name;
	var company_name = req.body.company_name;
	var company_dept = req.body.company_dept;
	var labtime = req.body.labtime;
	const sqlQuery = 'UPDATE labtime SET user_name=?, company_name=?, company_dept=?, labtime=? WHERE idx=10'
	db.query(sqlQuery, [user_name,company_name,company_dept,labtime], (err, result) => {
		res.send(result);
		console.log(result);
	})
})
app.listen(PORT, ()=> {
    console.log(`Server PORT is : ${PORT}`);
})
