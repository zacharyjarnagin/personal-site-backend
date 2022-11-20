require('dotenv').config();

const experienceRoutes = require('./routes/experience');
const projectRoutes = require('./routes/project');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use('/experience', experienceRoutes);
app.use('/project', projectRoutes);

app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})