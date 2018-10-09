const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'restapi'
  // password: '',

});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('aaaa');
});

app.get('/user', (req, res) => {
  db.query('select * from person', (err, result) => {
    if(err) res.send({status: 400, result: err});
    res.send({status: 200, result: result});
  });
});

app.post('/user', (req, res) => {
  const {id, name, age} = req.body;
  db.query(`insert into person(id, name, age) values( ?, ?, ?)`,[id, name, age],
    (err, result) => {
      if(err) res.send({status: 400, result: err});
      res.send(result);
    })
});

app.put('/user/:id', (req, res) => {
  db.query('update person set name=?, age=? where id=?',[
      req.body.name,
      req.body.age,
      req.params.id
    ],
    (err, result) => {
      if(err) res.send({status: 400, result: err});
      res.send({status: 200, result: result});
    })
});

app.delete('/user/:id', (req, res) => {
  db.query('delete from person where id=?', [req.params.id], (err, result) => {
    if(err) res.send({status: 400, result: err});
    res.send({status: 200, result: result});
  })
});


app.listen(3000, () => {
  console.log('listening in 3000');
});