    // Array that new Books are pushed into
    
    let myLibrary = [];
    
    // Naming/Identifying variables for use in functions
    
    let form = document.querySelector('#form');
    let authorvalue = document.getElementById('authorValue');
    let titlevalue = document.getElementById('titleValue');
    let pagesvalue = document.getElementById('pagesValue');
    let readvalue = document.getElementById('readValue');

    // Constructor function to create new books
    
    function Book(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
        this.info = function() {
            return `${title} by ${author} has ${pages} pages and ${read}.`
        }
    }
    
    // Function to assign data-numbers for splicing, add DOM elements and assign them values, delete button to remove DOM elements from page/array
    
    function createBook() {
        
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.dataset.number = (myLibrary.length - 1);

        let titleContent = document.createElement('div');
        titleContent.classList.add('book-content');
        titleContent.innerHTML = titlevalue.value;

        let authorContent = document.createElement('div');
        authorContent.classList.add('book-content');
        authorContent.innerHTML = `${'Author: ' + authorvalue.value}`;

        let pagesContent = document.createElement('div');
        pagesContent.classList.add('book-content')
        pagesContent.innerHTML = `${pagesvalue.value + ' pages'}`;

        let readButton = document.createElement('button');
        readButton.setAttribute("id", "readstatus");

        if (readvalue.checked === true) {
            readButton.classList.add('read');
            readButton.innerText = `${"read"}`;
        }
        else {
            readButton.classList.add('unread');
            readButton.innerText = `${'unread'}`;
        }
        readButton.addEventListener('click', function(){
            if (readButton.innerText === `${'read'}`) { 
                readButton.classList.remove('read');
                readButton.classList.add('unread');
                readButton.innerText = `${'unread'}`
            }
            else {
                readButton.classList.remove('unread');
                readButton.classList.add('read');
                readButton.innerText = `${'read'}`;
            }
        })
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = 'x';
        deleteBtn.onclick = function (){
            bookDiv.remove()
            let x = bookDiv.dataset.number;
            // myLibrary.splice(x,1)
            delete myLibrary[x];
        }
        document.querySelector('.library-main').appendChild(bookDiv);
        bookDiv.append(titleContent, authorContent, pagesContent, readButton, deleteBtn);
    }
    
    // Function to push books into myLibrary array and create DOM elements on page
    
    function addBookToLibrary() {
        const newBook = new Book(authorvalue.value, titlevalue.value, pagesvalue.value, readvalue.value)
        myLibrary.push(newBook);
        createBook();
    }
    
    // Add form responsiveness when the submit button is pressed
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addBookToLibrary()
        form.reset();
    })