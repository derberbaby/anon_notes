let mongoose = require('mongoose');

let NoteSchema = new mongoose.Schema({
  content: {type: String, required: [true, "note content is required"]}
}, {timestamps: true});

let Note = mongoose.model('Note', NoteSchema);