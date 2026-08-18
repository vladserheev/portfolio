const express = require('express')
const cors  = require("cors")

const fs = require("fs");
const path = require("path");

const app  =  express();
const PORT = 3000;
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "dist")));

app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    const filePath = path.join(__dirname, "data", "messages.json");

    // Read existing messages
    const messages = JSON.parse(
        fs.readFileSync(filePath, "utf-8")
    );

    // Create new message
    const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
        status: "new"
    };

    // Add new message
    messages.push(newMessage);

    // Save to JSON
    fs.writeFileSync(
        filePath,
        JSON.stringify(messages, null, 2)
    );

    console.log("New message:", newMessage);

    res.json({
        success: true,
        message: "Message received!",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

