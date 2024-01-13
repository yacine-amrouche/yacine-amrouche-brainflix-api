const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const videosRoute = require("./routes/video.js")
require("dotenv").config();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
app.use(cors({ origin: CORS_ORIGIN }));
app.use("/photos", express.static("./public/images"));
app.use("/videos", videosRoute)









app.listen(8080, () =>{
    console.log(`listening on port ${PORT}`);
})