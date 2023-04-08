const express= require('express');
const bodyParser=require('body-parser');
const cors= require('cors');

const PORT =3200;

const app = express();

app.use(bodyParser.json());

app.use(cors());


app.get('/registerdone',function(req,res){
    localStorage.setItem('Register',req)
})

app.get('/logindone',function(req,res){
    localStorage.getItem('Register')
})



app.listen(PORT,function(){
    console.log("Server running on port "+PORT);
});

