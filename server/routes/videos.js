const express = require('express');
const router = express.Router();
const videos = require('../data/videos.json');
const videoDetails = require('../data/video-details.json');
const fs = require('fs');
const path = require('path');
const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');

router.get('/', (req, res)=> {
    fs.readFile(path.resolve('../../sprint-three/server/data/video-details.json'), (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        data = JSON.parse(data);
        res.send(data);
    })

});

router.get('/:id', (req, res) => {
    const videoId = req.params.id;
    res.send(videoDetails.find(
        eL => eL.id == videoId
    ))
})

router.post('/', (req, res) => {
    fs.readFile(path.resolve('../../sprint-three/server/data/videos.json'), (err, data) => {    if (err){
        console.error(err);
        return; 
    }
        data = JSON.parse(data);
const newVid = req.body;
const videos = data;
newVid.id = "11111"
console.log(req.body);
videos.push(newVid); 




        fs.writeFile(`/Users/codycrenshaw/Desktop/Projects/Cody-Crenshaw-Brainflix/sprint-three/server/data/videos.json`, JSON.stringify(videos), (err,data) => {
            res.json(videos)
        })})})


module.exports = router;