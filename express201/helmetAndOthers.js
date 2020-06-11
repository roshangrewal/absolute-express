const express = require('express');
const helmet = require('helmet');

const port = 3000;
const app = express();

// 1. static
// 2. json
// 3. urlencoded
app.use(helmet());
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.json(['Test',1,3,5,6,9]);
  
});

app.listen(process.env.PORT || port, ()=> {
  console.log('Server is running on ', port);
});

