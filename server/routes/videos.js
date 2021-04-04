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
// console.log(req.body);
videos.push(newVid); 





        fs.writeFile(path.resolve(`../data/videos.json`), JSON.stringify(videos), (err,data) => {
            res.json(videos)
        })})})

        router.post('/files', (req, res) =>{
            console.log(req.body);

 
fs.writeFile(path.resolve(`../videos/${req.body.title}`), req.body,(err,data) => {
    console.log(data);
    res.send("broken")
        })})


module.exports = router;