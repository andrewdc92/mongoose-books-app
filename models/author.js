var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AuthorSchema = new Schema ({
    name: String,
    alive: Boolean,
    image: String,
});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;


// var mongoose = require('mongoose'),
//   Schema = mongoose.Schema;
//
// var BookSchema = new Schema({
//   title: String,
//   author: String,
//   image: String,
//   releaseDate: String
// });
//
// var Book = mongoose.model('Book', BookSchema);
//
// module.exports = Book;
