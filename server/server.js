const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const produceController = require('./controller/produceController');
const Produce = require('../model/projectModel');


mongoose.connect(
  'mongodb+srv://smkc:test123@cluster0.qamiwoi.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});



app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/produce', async (req, res) => {
  const data = await Produce.find().sort({ expireDate: 1 });
  // console.log('in find!');
  res.status(200).send(data);
});

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile('./index.html');
});

app.post('/produce', produceController.createProduce, (req, res) => {
  return res.status(200).send(res.locals.produce);
});

//patch extend expirering days
app.patch('/produce/:id', produceController.updateProduce, (req, res) =>{
  console.log('in patch');
 return res.status(200).end();

})


// delete item
app.delete('/produce/:id', produceController.deleteProduce, (req, res) => {
  return res.status(200).send('Item deleted!');
})

// statically serve everything in the build folder on the route '/build'
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
