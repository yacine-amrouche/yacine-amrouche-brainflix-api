const express = require("express");
const cors = require("cors");
const router = express();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


router.get("/", (req, res) =>{
    const videosJASON = fs.readFileSync("./data/videos.json")
    const videos = JSON.parse(videosJASON)
    res.status(200).json(videos);
});

router.get("/:id", (req, res) =>{
    const videoId = req.params.id
    const videosJASON = fs.readFileSync("./data/videos.json")
    const videos = JSON.parse(videosJASON)
    const videoDisplay = videos.find(video => video.id === videoId)
    res.status(200).json(videoDisplay);
});

router.post("/", (req, res) =>{
    const video = req.body;
    video.id = uuidv4();
    const videosJASON = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosJASON);
    videos.push(video);
    fs.writeFileSync("./data/videos.json", JSON.stringify(videos));
    res.status(201).json(video);
   
})

module.exports = router;


 