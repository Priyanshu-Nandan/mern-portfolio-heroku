require('dotenv').config();
const dbConfig = require("./config/dbConfig.js");
const express = require("express");

const app = express();
const portfolioRoute = require("./routes/portfolioRoute.js");
// const cors = require("cors");
// app.use(cors());
app.use(express.json());
app.use("/api/portfolio", portfolioRoute);
const PORT = process.env.PORT || 5000;


const path = require("path");

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, "frontend/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend/build/index.html"))
    })
}

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})

/**
 * struggling with the node.js dying whenever the server you are calling refuses to *connect. Try this:
 * 
 */
process.on('uncaughtException', function (err) {
    console.log(err);
}); 
