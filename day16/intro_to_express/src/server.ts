import express from 'express'
import dotenv from 'dotenv'

//configure dotenv
dotenv.config()
const port = process.env.PORT
console.log(port) //  3000

// create an instance of the express application
const app = express()

// a simple get request saying hello
app.get('/', (req, res) => {
    res.send('Hello World')
})

// create server
app.listen(port, () => {
    console.log('Server is running on port 3000')
})

