const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json({ extended: true }));
app.use(cors()); // Enable CORS for all routes

const con = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project'
});

con.getConnection((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Database connection established');
});

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Route to handle user signup
// Route to handle user signup
app.post('/signup', (req, res) => {
    const { userId, name, branch, mobile } = req.body;

    const sql = 'INSERT INTO assign (id, name, branch, mobile) VALUES (?, ?, ?, ?)';
    con.query(sql, [userId, name, branch, mobile], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error signing up');
            return;
        }

        // Send simple success message
        res.send('User signed up successfully');
    });
});

// Route to handle login (for demonstration, this simply returns all users)
// Route to handle user login
app.post('/login', (req, res) => {
    const { id, name } = req.body;
    const query = 'SELECT * FROM assign WHERE id = ? AND name = ?';

    con.query(query, [id, name], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error executing query');
            return;
        }
        if (results.length > 0) {
            // If user exists, fetch all students and send them as response
            fetchAllStudents(res);
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});



// Function to fetch all students
const fetchAllStudents = (res) => {
    const query = 'SELECT * FROM assign';

    con.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching students:', err);
            res.status(500).send('Error fetching students');
            return;
        }
        // Send all students as response
        res.json(results);
    });
};
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});
