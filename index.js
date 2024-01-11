const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const videosRoute = require("./routes/video.js")

app.use(cors());
app.use(express.json());
app.use("/photos", express.static("./public.images"));
app.use("/videos", videosRoute)






app.listen(8080, () =>{
    console.log('index is runing on 8080');
})