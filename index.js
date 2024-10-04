
import express from 'express';

const app = express();


const API_KEY = '123456';  
const PORT = 4000;  

const apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).json({ error: 'API key is missing' });
    }

    if (apiKey !== API_KEY) {
        return res.status(403).json({ error: 'Invalid API key' });
    }

    next();
};


app.get('/api/private-data', apiKeyAuth, (req, res) => {
    res.json({ message: 'This is private data' });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
