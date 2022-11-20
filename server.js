import fetch from "node-fetch";
import express from 'express';


const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')

app.get('/',(req, res)=>{
    res.render('login')
})

app.get('/principal',(req, res)=>{
    res.render('index')
})

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto  ${PORT}`);
})

fetch("https://hp-api.herokuapp.com/api/characters")
    .then((respuesta)=>{
        return respuesta.json()
    }).then((resp)=>{
        console.log(resp)
    })

