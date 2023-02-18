const express = require("express")
const bodyParser = require("body-parser")
const app = express();

const pageContacts = require("./view/pages/contacts")

app.use(bodyParser.urlencoded({extendend:false}))

app.get('/contacts',(request, response) => {
    console.log(request.headers)
    response.send(pageContacts)
})

app.get('/shop',(request, response) => {
    console.log(request.headers)
    response.json(pageShop)
})

const port = process.env.PORT || 8000;

app.listen(8000,() => 
    console.log(`Сервер запущен на порту ${port}, http://localhost:${port}`));