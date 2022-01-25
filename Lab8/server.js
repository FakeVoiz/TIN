const bodyParser = require("body-parser");
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded
  ({
      extended:true
  }));
app.set('view engine','ejs');

app.get('/hello', (req, res) => 
{
  res.send('hello world');
});

app.get('/form', (req, res) => 
{
  res.sendFile(__dirname + '/form.html');
});
  
app.post('/formdata', (req, res) => 
{
  var name = req.body.Name;
  var surname = req.body.Surname;
  var email = req.body.Email;

   var content =
    [
     {'data': name}, 
     {'data': surname}, 
     {'data': email}
    ];

   res.render('form', {'formdata': content});
});

app.post('/jsondata', (req,res) =>
{
  res.send(`data1: ${req.body.data1}\ndata2: ${req.body.data2}\ndata3: ${req.body.data3}`);
  console.log(`data1: ${req.body.data1}\ndata2: ${req.body.data2}\ndata3: ${req.body.data3}`);
});

app.listen(3000);