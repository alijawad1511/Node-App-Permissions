const express = require('express');
const app = express();
const { authUser } = require('./middlewares');

app.use(express.json());

app.get('/',(req,res) => {
    res.json('You have access');
})

app.post('/search',(req,res) => {
    res.json('You have access');
})

app.post('/edit',authUser(["student","teacher"]),(req,res) => {
    res.json('You have access');
})

app.get('/courses',(req,res) => {
    res.json('You have access');
})

app.get('/courses/grades',(req,res) => {
    res.json('You have access');
})

app.delete('/delete',(req,res) => {
    res.json('You have access');
})


app.listen(5000,() => console.log('Server running at http://localhost:5000'));