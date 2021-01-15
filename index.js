const express=require('express')
const bodyParser=require('body-parser')

const app=express()
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use(require('./app/routes'));
app.listen(process.env.NODE_PORT || 3000, () => console.log(`server running on PORT  ${process.env.NODE_PORT} !`));
