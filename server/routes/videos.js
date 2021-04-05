const express = require('express');
const router = express.Router();
const videos = require('../data/videos.json');
const videoDetails = require('../data/video-details.json');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');


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
const videos = data;
// console.log(req.body);
// console.log(data);
let newVid = req.body;
newVid.id = uuidv4();
newVid.channel = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
// console.log(req.body);
console.log('newVid',newVid);
// videos.push(req.body);
// console.log('videos',videos);
videos.push(newVid);
console.log('videos', videos);





        fs.writeFile(path.resolve(`../../sprint-three/server/data/videos.json`), JSON.stringify(videos), (err,data) => {
            console.log("try");
        })});
        fs.readFile(path.resolve('../../sprint-three/server/data/video-details.json'), (err, data2) => {    if (err){
            console.error(err);
            return; 
        }        data2 = JSON.parse(data2);
        const newVid2 = req.body;
        const videos2 = data2;
        newVid2.id = uuidv4();
        newVid2.channel = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
        newVid2.image = path.relative('http://localhost:8080/client/public/Upload-video-preview.jpg')
        // console.log(req.body);
        videos2.push(req.body);
        console.log('vid2',videos2); 
        fs.writeFile(path.resolve(`../../sprint-three/server/data/video-details.json`), JSON.stringify(videos2), (err,data3) => {
            res.json(data3)
        })
    })
        // res.send("videos")
    })

        router.post('/files', (req, res) =>{
            console.log(req.body);


 
fs.writeFile(path.resolve(`../videos/${req.body.title}`), req.body,(err,data) => {
    console.log(data);
    res.send("broken")
        })})


module.exports = router;