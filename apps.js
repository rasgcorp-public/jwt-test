const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 5000;

app.post('/login', (req, res) => {
    const mockLoggedUser = {
        username: "patient1",
        emails: "patient1@sehr-network"
    };
    jwt.sign(mockLoggedUser, 'secretkey', (err, token) => {
        if (err) {
            res.json({err: err})
        }
        res.json({token: token});
    });
});

app.listen(port, () => console.log(`App listening on port ${port}`));

