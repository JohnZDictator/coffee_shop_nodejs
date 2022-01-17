const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Connected to port: ${PORT}`)
})
