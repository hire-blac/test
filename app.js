const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const port = 3000;

app.get('/', (req, res)=>{
  res.render('index');
})

app.get('/new', (req, res)=>{
  res.render('new');
})

app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`);
})