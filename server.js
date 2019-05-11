const express = require('express');

const app = express();

const PORT = 5000;

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, name: 'Konstantin Toroshchin', email: 'k.toroshchin@gmail.com'},
        {id: 2, name: 'John Johnson', email: 'john@mail.com'},
        {id: 3, name: 'Rachel Griffen', email: 'griffen@mail.com'}
    ]
    res.json(customers)
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))