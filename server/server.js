const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Mongodb Connected')
})
.catch((error) => {
    console.log(`Mongodb error: ${error}`)
})

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})