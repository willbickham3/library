let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author} has ${pages} pages and ${read}.`
    }
    addBookToLibrary(this);
}

function addBookToLibrary(Book) {
    const newBook = new Book () 
    myLibrary.push(newBook)
}