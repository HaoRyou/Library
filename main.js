const addbooks = document.getElementById("Books");

// const mylibrary = [];


class Book{
    static mylibrary = [];

    constructor(title,author,pages,read){
        if(!new.target){
        throw Error("You must use 'new operator to call the constructor");
        }
        this.title = title;
        this.author = author;
        this.pages=pages;
        this.read = read;
        this.id = crypto.randomUUID();
        this.info = `${title} by ${author}, ${pages} pages,  ${read ? "has read" :"not read yet" }`;
    }

    static addBookToLibrary(books){
        Book.mylibrary.push(books);
    }

}



// function Book(title, author, pages, read){
//     if(!new.target){
//         throw Error("You must use 'new operator to call the constructor");
//     }
//     this.id = crypto.randomUUID();
//     this.title=title;
//     this.author=author;
//     this.pages=pages;
//     this.read=read;
//     this.info = `${title} by ${author}, ${pages} pages,  ${read ? "has read" :"not read yet" }`;
// }

// function addBookToLibrary(title,author,page,read){
//     let books = new Book(title,author,page,read);

//     mylibrary.push(books);
// }

//Testing Books

Book.addBookToLibrary(new Book("Final Game","Steven",150,false));
Book.addBookToLibrary(new Book ("End Game","Jobs",150,true));
Book.addBookToLibrary(new Book("Fighting for life","Kim",150,true));
Book.addBookToLibrary(new Book("The seven Sin","LI",150,false));

bookstohtml();
//

function bookstohtml(){
    while(addbooks.firstChild){
        addbooks.removeChild(addbooks.firstChild);
    }

    Book.mylibrary.forEach(books => {
        const div = document.createElement('div');
        div.className='book';
        div.textContent = books.info;

        const hasread = document.createElement('button');
        let reading = `${books.read ? "has read" :"not read yet" }`;

        hasread.textContent = reading;
        hasread.onclick = () =>{
            if(hasread.textContent == "has read"){
                hasread.textContent = "not read yet";
            }
            else{
                hasread.textContent = "has read";
            }
        }

        const div2 = document.createElement('div');
        div2.className='button_div';
        
        
        div2.appendChild(hasread);

        const removebook = document.createElement('button');
        removebook.textContent = "Delete";
        removebook.onclick = () =>{
            deletebook(books.id);
        }
        div2.appendChild(removebook);
        div.appendChild(div2);
        
        addbooks.appendChild(div);
    });
}

function deletebook(id){
    const index = Book.mylibrary.findIndex(book =>book.id == id);
    if(index !==-1){
        Book.mylibrary.splice(index,1);//delete book
        bookstohtml(); //refresh the page
    }
}


const popup = document.getElementById('popups');

function openpopup(){
    popup.classList.add("open-popup");
}

function closepopup(){
    popup.classList.remove('open-popup')
}

function submit_work(){
    const usertitle = document.getElementById('Title').value;
    const userauthor = document.getElementById('Author').value;
    const userpage = document.getElementById('Page').value;
    const userhasread = document.getElementById('HasRead').checked;
    Book.addBookToLibrary(new Book(usertitle,userauthor,userpage,userhasread));
    bookstohtml();
    
    document.getElementById('Title').value ='';
    document.getElementById('Author').value='';
    document.getElementById('Page').value='';
    document.getElementById('HasRead').checked='';
    closepopup();
}

