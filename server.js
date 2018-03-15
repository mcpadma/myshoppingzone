const express = require('express');
const  bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// const api = require('./server/routes/api');
// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const port = 3000;

const app = express();

// CORS Middleware
app.use(cors());

app.use(express.static(path.join(__dirname,'dist')));

// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// app.use('/api',api);

const users = require('./routes/users');


app.use('/users', users);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(port,function(){
    console.log("server running on localhost:" +port);
});