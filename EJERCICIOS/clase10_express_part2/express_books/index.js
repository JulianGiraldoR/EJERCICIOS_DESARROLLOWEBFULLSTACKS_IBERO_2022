const bodyParser = require('body-parser');
const express = require('express');
const responseMessage = require('./lib/response-message');


const app = express();


app.use(express.json());
app.use(bodyParser.json());

//base de datos
let books = [
  {
  id:" 1 ",
  Author: " J. K. Rowling ",
  Title:"Harry Potter y la piedra filosofal",
  year_publication:"1997",
  price:"140000",
  ISBN:"9780590353403"

},
{
  id:"2",
  Author: " J. K. Rowling ",
  Title:"Harry Potter y la camara secreta",
  year_publication:"1998",
  price:"41000",
  ISBN:"9788869185182"

},
];
//metodo get
app.get ('/books',(req,res)=>{
  res.status(200).json({
    books:books
  })
});

app.get ('/books/:id',(req,res)=>{
  const {id} = req.params;
  const bookIndex = books.findIndex(item=> item.id===id);
  const book = books[bookIndex];
  if(!book){
    responseMessage( res, 404, "book not found");
  };

  res.json({
    book:books[bookIndex]
  })  
});

//metodo post

app.post('/books', (req, res) => {
  const { id,Author, Title, Year_publication, price, ISBN } = req.body;
  if( !(id && Author && Title && Year_publication && price && ISBN)){
    responseMessage(res, 400, "Bad request, check for book fields.");
  }

  const book = {
    id,
    Author,
    Title,
    Year_publication,
    price,
    ISBN
  };
  books.push( book );
  res.status(201).json({
    message: "book created succesfully",
    data: book
  });
});

//metodo put

app.put('/books/:id', (req, res) => {
  const { bookID } = req.params;
  const { id,Author, Title, Year_publication, price, ISBN } = req.body;
  const bookIndex = books.findIndex(item => item.id === bookID);
  if(!books[bookIndex]){
    responseMessage(res, 404, "book not found");
  };
  if( !(id && Author && Title && Year_publication && price && ISBN)){
    responseMessage(res, 400, "Bad request, check for book fields.")
  }

  const book = {
    id,
    Author,
    Title,
    Year_publication,
    price,
    ISBN
  };
  books[bookIndex] = book
  

  res.status(200).json({
    message: "book updated succesfully",
    data: book
  });
});

//metodo delete
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const bookIndex = books.filter(item => item.id === id);

  if(!books[bookIndex]){
    responseMessage(res, 404, "book not found");
  };

  books = books.filter(item => item.id !== id);
  responseMessage(res, 200, "book deleted succesfully")
});






app.listen(3000, () =>{
  
  console.log("The application is running at: http://127.0.0.1:3000 ");
})