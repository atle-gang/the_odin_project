// Write a constructor for making “Book” objects.
// Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.read ? "has read" : "not read yet"}`;
  };
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "not read yet"
);
console.log(theHobbit.info());
