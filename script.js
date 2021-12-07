

console.log('Sending a fetch request');




console.log('Done fetching data');
let TEMPLATE = "";
// 2
// i = 0
// i = 1
// i = 2
// For OF   

 function code(data)
 {
     for(let book of data)
 {
     console.log("I is:",book, "Current title is:", book.book)    
    TEMPLATE += `<div class="book-tabs">
                            <div class="book-image">
                                <a href="#">
                                    <img src=${book.image} width="180px"  alt="">
                                </a>
                            </div>
                            <div class="book-details">
                                <h5>${book.book}</h5>
                                <h6>${book.author}</h6>
                                <h4>₹${book.price}</h4>
                            </div>
                        </div>`;                       
 }
const booksGrid = document.querySelector('.grid-container');
booksGrid.innerHTML = TEMPLATE;
 }


fetchBooks();

async function fetchBooks(){
    const res = await fetch('https://bookshelf.gq/api/books', {
        method: 'PUT'
    });
    const data = await res.json();
    code(data);

}   



