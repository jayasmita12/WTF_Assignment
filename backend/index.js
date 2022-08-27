const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connect= require("./src/configs/db")
const userController = require("./src/controllers/user.controller")
const {register,login} = require("./src/controllers/auth.controller")


const app = express()
app.use(express.json())
app.use(cors())


app.post("/register", register)
app.post("/login", login)

const port = process.env.PORT || 5050
app.listen(port , async()=>{
    try{
        await connect();
        console.log(`listening on port ${port}`)
    }
    catch(err){
        console.log(err.message);
    }
})