const express = require('express')
const app = express()
const port = 2000
const connectDB = require('./db/connectdb')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const web = require('./routes/web')


app.use(cookieParser())
// Connect to DB
connectDB()

// Middleware for parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// ✅ Corrected CORS setup
const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

//fileupload
app.use(fileUpload({ useTempFiles: true }));

// Routes
app.use('/api', web)

// Start server
app.listen(port, () => {
  console.log(`Server starte localhost:${port}`)
})