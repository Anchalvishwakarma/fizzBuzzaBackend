const express = require('express')
const bodyParser = require('body-parser');
const {methodOne, methodTwo} = require('./fizzBuzz/fizzBuzz')
const app = express()
const port = 3000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) =>{
    res.json({status:200, msg: 'ok'})
})

app.get('/fizzbuzz/type/1/count/:count', (req, res) => {
    const count = req.params.count || 0 ;
    const fizzBuzzReturn = methodOne({count});
    res.json(fizzBuzzReturn)
})

app.post('/fizzbuzz/type/2', (req, res) => {
    const count = req.body.count || 0 ;
    const rules = req.body.rule  || {3:'FIZZ', 5: 'BUZZ'}
    const fizzBuzzReturn = methodTwo({count, Rules:rules})
    res.json(fizzBuzzReturn)
})

app.get('*', function(req, res){
    res.send('URL NOT FOUND !!', 404);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
