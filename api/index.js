const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const router = require('express').Router();

dotenv.config();
const PORT = process.env.PORT;
const DB_URL = process.env.MONGO_URL;

mongoose.connect(
  DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to Database')
);

// middleware

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () =>
  console.log(`Backend server is running on port ${PORT}`)
);
