const express = require('express')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))


// For testing purposes
setTimeout(() => {test()}, 2000)
async function test() {
    let data = {
        text: "321"
    };

    const response = await fetch('http://localhost:5000/api/goals/6226322e61bd49880fdd8c41', {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });
    const returnData = await response.json();

    console.log(returnData);
}