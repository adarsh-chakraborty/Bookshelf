const DUMMY_DATA = [
    {
        "name": "Adarsn Chakraborty",
        "title": "The Moonstone",
        "author": "Wilkie Collins (1868)",
        "price": "200",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/26/The_Moonstone_1st_ed.jpg",
    },
    {
        "name": "Shrey Lawang",
        "title": "Harry Potter",
        "author": "JK Rowlings",
        "price": "250",
        "image": "https://images-na.ssl-images-amazon.com/images/I/910ityjoncL.jpg",
    },
    {
        "name": "Shrey Lawang",
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "price": "500",
        "image": "https://cdn.shopify.com/s/files/1/0100/4001/6992/products/War-_-Peace-Books-Online-Urdu-Bazaar-1613459309_360x.jpg?v=1625005278",
    }      
]   

let TEMPLATE = "";
// 2
// i = 0
// i = 1
// i = 2
// For OF   

 for(let book of DUMMY_DATA)
 {
     console.log("I is:",book, "Current title is:", book.title)    
    TEMPLATE += `<div class="book-tabs">
                            <div class="book-image">
                                <a href="#">
                                    <img src=${book.image} width="180px"  alt="">
                                </a>
                            </div>
                            <div class="book-details">
                                <h5>${book.title}</h5>
                                <h6>${book.author}</h6>
                                <h4>₹${book.price}</h4>
                            </div>
                        </div>`;                       
 }
const booksGrid = document.querySelector('.grid-container');
booksGrid.innerHTML = TEMPLATE;


