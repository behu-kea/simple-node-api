const express = require('express');
const app = express();
const port = 3000;

// Define a GET route that accepts a 'vision' query parameter
app.get('/', (req, res) => {
    // Access the 'vision' query parameter
    const vision = req.query.vision;

    // You can use 'vision' to fetch data or perform operations.
    // For this example, we'll just return it in the response.
    console.log(vision)
    res.json({ vision: vision });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
