require('dotenv').config({ path: './config.env' });
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

//Connect Database
connectDB();

const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));