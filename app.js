const express = require('express');
const app = express();

const Session = require('express-session');
const FileStore = require('session-file-store')(Session);
const path = require('path');

app.use(Session({
    store: new FileStore({
        path: path.join(__dirname, '/tmp'),
        encrypt: true
    }),
    secret: 'Super Secret !',
    resave: true,
    saveUninitialized: true,
    name : 'sessionId'
}));

app.get('/register', (req, res) => {
  // insert into user values (req.body.username, req.body.password)
  req.session.userId = 42;

  res.send('hello world from register');
})

app.get('/login', (req, res) => {
  // select userId from user where username=req.body.username and password=req.body.password
  req.session.userId = 42;

  res.send({userId: req.session.userId});
})

app.get('/logout', (req, res) => {
  delete req.session.userId;
  res.sendStatus(200);
});

app.get('/userId', (req, res) => {
  res.send({userId: req.session.userId});
});

module.exports = app;
