
const express = require('express')
const app = express()
const port = 5001
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models');
const cookie = require('cookie-session');


mongoose.connect("mongodb+srv://root:akki909@cluster0.sm3rshd.mongodb.net/educations", {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
    
    app.use(
        cookie({
          // Cookie config, take a look at the docs...
          secret: 'I Love India...',
          resave: false,
          saveUninitialized: true,
          cookie: {
            secure: true
          },
        }),
      );
      
app.use(cors());
app.use(express.json())

app.post('/register', async (req, res) => {

    try {
        const reqBody = req.body;
        const students = new Student(reqBody);
        await students.save()
        res.status(201).send({ status: true, message: "student successfully registered", data: students })

    } catch (err) {

        res.status(500).send({ status: false, message: err.message })
    }
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))