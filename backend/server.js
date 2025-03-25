const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')

// Middleware
const app = express()
app.use(express.json())
app.use(cors())

dotenv.config();


const PORT = process.env.PORT ||'9000'

// Connect to MongoDB
connectDB()



app.get('/', (req, res) => res.send('Hello World!'))
app.use("/api/users", userRoutes)


app.listen(PORT, () => console.log(`Serever is running on  ${PORT}!`))