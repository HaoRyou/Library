const mylibrary = [];

function Book(title, author, pages, read){
    if(Lnew.target){
        throw Error("You must use 'new operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    info = console.log(`${title} by ${author}, ${pages} pages,  ${read ? "has read" :"not read yet" }`)
}

function addBookToLibrary(title,author,page,read){
    books = new Book(title,author,page,read);

    mylibrary.push(books);
}

mylibrary.forEach(books => { books.info;
    
});

addBookToLibrary(Final,Steve,150,false);
addBookToLibrary(end,job,150,true);
addBookToLibrary(fight,kim,150,true);
addBookToLibrary(sin,li,150,false);
