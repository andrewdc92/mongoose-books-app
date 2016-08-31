var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require("./book.js");
// question here, related to exporting whole book file vs
