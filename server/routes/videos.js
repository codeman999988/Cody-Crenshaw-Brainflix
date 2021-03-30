const express = require('express');
const router = require('express').Router();
const videos = require('../data/videos.json');
const videoDetails = require('../data/video-details.json');

router.get('/', (req, res)=> {
res.send(videos);
});

router.get('/:id', (req, res) => {
    const videoId = req.params.id;
    res.send(videoDetails.find(
        eL => eL.id == videoId
    ))
})


module.exports = router;