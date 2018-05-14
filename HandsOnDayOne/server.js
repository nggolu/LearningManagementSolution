const  express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/',express.static(path.join(__dirname,'public')))
app.use('/',require('./routes/api').route)

const port = 8080 ;
app.listen(port ,()=>console.log("server started at http://localhost:8080/ "))