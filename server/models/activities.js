var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const { env:{ MONGO_DB = 'mongodb://localhost/demo' } } = process;

mongoose.connect(MONGO_DB,
    { useNewUrlParser: true },
    function(err) {
      if(err) console.log(err)
      else console.log('Connect success')
    }
  );

  const activitiesSchema = new Schema({
      type : { type:String , 'default':null},
      description: { type: String , 'default':null},
      event : {type:String ,  'defualt':null}
  });

  const Activities = mongoose.model('Activities',activitiesSchema);

  export {Activities}