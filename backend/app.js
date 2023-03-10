require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const loginRouter = require('./routes/loginRouter')
const bcrypt = require('bcrypt')

const app = express();
app.use(express.json())

app.use("/login", loginRouter)

const PORT = process.env.PORT
const DBURL = process.env.MONGODB_URL

app.listen(PORT, ()=> {
    console.log(`Connected to port: ${PORT}`);
})

mongoose.connect(DBURL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
    console.log('Connected to DB');
});