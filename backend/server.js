require('dotenv').config();
console.log(process.env.GEMINI_API_KEY);
const express = require('express');
const cors = require('cors');

const { HealthChatbot } = require('./chatbot');

const app = express();

app.use(express.json());
app.use(cors());

const chatbot = new HealthChatbot();

// Home Route
app.get('/', (req, res) => {
    res.send('Health Chatbot Backend Running');
});

// Health Route
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK'
    });
});

// Chat Route
app.post('/api/chat', async (req, res) => {

    try {

        const { message } = req.body;

        const reply = await chatbot.chat(message);

        res.json({
            reply
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Server Error'
        });

    }

});

const PORT = 5000;

app.listen(5000, "0.0.0.0", () => {
    console.log("Server running on port 5000");
});