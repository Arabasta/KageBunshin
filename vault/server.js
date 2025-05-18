const express = require('express');

const app = express();
const PORT = 3000;

app.get('/get-jit-ssh-key', (req, res) => {
    res.send('JIT SSH Key');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on port ${PORT}`);
});