const bodyParser = require('body-parser');
const express = require('express');
const responseMessage = require('./lib/response-message');



const app = express();


app.use(express.json());
app.use(bodyParser.json());

//base de datos
let buyers = [
  {
  id:"1",
  Name: " juan rojas ",
  Cc:"1094890374",
  Email:"juan.rojas@gmail.com",
  Cell_number:"3052581186",  
},
];

//metodo get
app.get ('/buyers',(req,res)=>{
  const { size } = req.query;

  if(size){
    const sizedbuyers = buyers.slice(1, size );
    res.status(200).json({
      buyers: sizedbuyers
    })
  };
  res.status(200).json({
    buyers:buyers
  })
});

app.get ('/buyers/:id',(req,res)=>{
  const {id} = req.params;
  const buyerIndex = buyers.findIndex(item=> item.id===id);
  const buyer = buyers[buyerIndex];
  if(!buyer){
    responseMessage( res, 404, "user not found");
  };

  res.json({
    buyer:buyers[buyerIndex]
  })  
});


//metodo post

app.post('/buyers', (req, res) => {
  const { id, Name, Cc, Email, Cell_number} = req.body;
  if( !(id && Name && Cc && Email && Cell_number)){
    responseMessage(res, 400, "Bad request, check for user fields.");
  }

  const buyer = {
    id,
    Name,
    Cc,
    Email,
    Cell_number
  };
  buyers.push( buyer );
  res.status(201).json({
    message: "user created succesfully",
    data: buyer
  });
});

//metodo put

app.put('/buyers/:id', (req, res) => {
  const { buyerID } = req.params;
  const { id, Name, Cc, Email, Cell_number} = req.body;
  const buyerIndex = buyers.findIndex(item => item.id === buyerID);
  if(!buyers[buyerIndex]){
    responseMessage(res, 404, "User not found");
  };
  if( !(id && Name && Cc && Email && Cell_number)){
    responseMessage(res, 400, "Bad request, check for user fields.")
  }

  const buyer = {
    id,
    Name,
    Cc,
    Email,
    Cell_numbe
  };
  buyers[buyerIndex] = buyer
  

  res.status(200).json({
    message: "user updated succesfully",
    data: buyer
  });
});

//metodo delete
app.delete('/buyers/:id', (req, res) => {
  const { id } = req.params;
  const buyerIndex = buyers.filter(item => item.id === id);

  if(!buyers[buyerIndex]){
    responseMessage(res, 404, "user not found");
  };

  buyers = buyers.filter(item => item.id !== id);
  responseMessage(res, 200, "user deleted succesfully")
});






app.listen(3000, () =>{
  
  console.log("The application is running at: http://127.0.0.1:3000 ");
})