const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const portfolioDist = path.join(__dirname, "../client/dist");
const gamixBuild = path.join(__dirname, "../gamix/build");
const barbershopBuild = path.join(__dirname, "../barbershop/build");


// ==========================================
// GAMIX
// ==========================================

app.use("/projects/gamix", express.static(gamixBuild));

app.get("/projects/gamix/{*splat}", (req, res) => {
    res.sendFile(path.join(gamixBuild, "index.html"));
});


// ==========================================
// BARBERSHOP
// ==========================================

app.use("/projects/barbershop", express.static(barbershopBuild));

app.get("/projects/barbershop/{*splat}", (req, res) => {
    res.sendFile(path.join(barbershopBuild, "index.html"));
});


// ==========================================
// PORTFOLIO
// ==========================================

app.use("/", express.static(portfolioDist));

app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(portfolioDist, "index.html"));
});


// ==========================================
// API
// ==========================================

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    const filePath = path.join(
        __dirname,
        "data",
        "messages.json"
    );

    const messages = JSON.parse(
        fs.readFileSync(filePath, "utf-8")
    );

    const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
        status: "new"
    };

    messages.push(newMessage);

    fs.writeFileSync(
        filePath,
        JSON.stringify(messages, null, 2)
    );

    res.json({
        success: true,
        message: "Message received!",
    });
});


// ==========================================
// SERVER
// ==========================================

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});