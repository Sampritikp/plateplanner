
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;
const db = new sqlite3.Database('./database.db');

app.use(cors());
app.use(express.json());


app.get('/api/recipes', (req, res) => {
    db.all('SELECT * FROM recipes', (err, rows) => {
        if (err) {
            res.status(500).send({ error: 'Error retrieving recipes' });
            return;
        }
        res.json(rows);
    });
});


app.post('/api/recipes', (req, res) => {
    const { name, ingredients, instructions } = req.body;
    db.run('INSERT INTO recipes (name, ingredients, instructions) VALUES (?, ?, ?)', [name, ingredients, instructions], function(err) {
        if (err) {
            res.status(500).send({ error: 'Error creating recipe' });
            return;
        }
        res.json({ id: this.lastID });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
