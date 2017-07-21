// require mongoose
let mongoose = require('mongoose');
// import models
let Note = mongoose.model('Note');
// exporting and importing this logic into routes
module.exports = {

  index: (req, res) => {
    Note.find({}).sort('-createdAt').exec((err, data) => {
      if(err) {
      	// create an array
        let errors = [];
        // loop through the array 
        for(let i in err.errors){
          // for each error's message, push to array
          errors.push(err.errors[i].message);
          // now the array is error messages
        }
        // this sends an error code along with all of the errors associated with the request
        // from backend to the front end
        return res.status(400).send(errors);
      }
      else{
        return res.json(data);
      }
    })
  },

  create: (req, res) => {
  	console.log(req.body);
    let note = new Note(req.body);
    note.save( (err, note) => {
    	if(err) {
    		console.log('back', err);
        	let errors = [];
        	for(let i in err.errors){
        	  errors.push(err.errors[i].message);
        	}
        return res.status(400).send(errors);
    	}
    	else {
    		return res.json(true);
    	}
    })
  },
}