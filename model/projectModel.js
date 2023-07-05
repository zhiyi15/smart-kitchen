const mongoose = require('mongoose');
// const uri =
//   'mongodb+srv://smkc:test123@cluster0.qamiwoi.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// client.connection((err) => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });

const produceSchema = new mongoose.Schema({
  name: { type: String, require: true },
  quantity: { type: Number, require: true },
  dateAdded: { type: Date, default: Date.now()},
  expireDate: { type: Number, require: true },
});

const Produce = mongoose.model('produce', produceSchema);

module.exports = Produce;
