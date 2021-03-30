const express = require('express');
const router = require('express').Router();
const videos = require('../data/videos.json');
const videoDetails = require('../data/video-details.json');
const fs = require('fs');

router.get('/', (req, res)=> {
    fs.readFile('/Users/codycrenshaw/Desktop/Projects/Cody-Crenshaw-Brainflix/sprint-three/server/data/videos.json', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        data = JSON.parse(data);
        console.log(data);
        res.send(data);
    })
    // res.send(videos);
});

router.get('/:id', (req, res) => {
    const videoId = req.params.id;
    res.send(videoDetails.find(
        eL => eL.id == videoId
    ))
})


module.exports = router;