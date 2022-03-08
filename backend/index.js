const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))


// For testing purposes
// setTimeout(() => {test()}, 2000)
// test()
// async function test() {
//     let data = {
//         text: "Koreguoju su Jonu"
//     };

//     const response = await fetch('http://localhost:5000/api/goals/62270aff819938fa6311ba51', {
//         method: 'delete',
//         body: JSON.stringify(data),
//         headers: {
//             'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjcwMDc4NDliMGE4MTUyMzdlNjcyZCIsImlhdCI6MTY0NjcyMzE5MiwiZXhwIjoxNjQ5MzE1MTkyfQ.d8RO-9qqB_vG3CPUMM1AfDr-S6lF_MmGxCUA7qXeak8',
//             'Content-Type': 'application/json'
//         }
//     });
//     const returnData = await response.json();

//     console.log(returnData);
// }

// Jonas eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjcwMDc4NDliMGE4MTUyMzdlNjcyZCIsImlhdCI6MTY0NjcyMzE5MiwiZXhwIjoxNjQ5MzE1MTkyfQ.d8RO-9qqB_vG3CPUMM1AfDr-S6lF_MmGxCUA7qXeak8
// Ponas eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjcwYzBiYWQ0ZTFmMmE1NGU2MTg5OCIsImlhdCI6MTY0NjcyNjE1NSwiZXhwIjoxNjQ5MzE4MTU1fQ.IKTGB-BeC1TfxYUMx4vC_R5DddpelXV0tYEoKIfxS4E