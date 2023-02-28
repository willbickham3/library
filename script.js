let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author} has ${pages} pages and ${read}.`
    }
}

function addBookToLibrary() {
    let authorvalue = document.getElementById('authorValue');
    let titlevalue = document.getElementById('titleValue');
    let pagesvalue = document.getElementById('pagesValue');
    let readvalue = document.getElementById('readValue');
    const newBook = new Book(authorvalue.value, titlevalue.value, pagesvalue.value, readvalue.value)
    myLibrary.push(newBook)
    let i = 0;
    const newDiv = document.createElement('div');
    newDiv.dataset.number = (myLibrary.length - 1);
    document.querySelector('.library-main').appendChild(newDiv)
}

let form = document.querySelector('#form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary()
    form.reset();
})
