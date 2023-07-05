const Produce = require('../../model/projectModel');

const ProduceController = {
  async createProduce(req, res, next) {
    const { name, quantity, dateAdded, expireDate } = req.body;

    const produce = await Produce.create({
      name,
      quantity,
      dateAdded,
      expireDate,
    });
    // dateAdded = `${Date.now().getMonth()}/${Date.now().getDate()}` ;
    res.locals.produce = produce;
    return next();
  },
  deleteProduce(req, res, next) {
    console.log('indelete controller');
    const { id } = req.params;
    console.log('id in deletecontroller: ', id);
    Produce.findOneAndDelete({ _id: id }, (err, pr) => {
      if (err)
        return next({
          log: `Error deleting document in db. ${err}`,
          status: 400,
          message: {
            err: 'An errror occurred deleting produce',
          },
        });
      return next();
    });
  },

  updateProduce(req, res, next) {
    const { id } = req.params;
    console.log('id in update controller: ', id);
    const { expireDate } = req.body;
    console.log('expireDate in update controller', expireDate)

    const produce = Produce.findOneAndUpdate({_id:id}, {expireDate: expireDate}, {new:true}, (err, pr) =>{
      if(err) 
      return next({
        log: `Error updating document in db. ${err}`,
        status: 400,
        message: {
          err: 'An errror occurred updating produce',
        },
      });
    
      return next();
    })
  }
};

module.exports = ProduceController;
