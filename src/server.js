const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json())
app.use('/api', router);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});