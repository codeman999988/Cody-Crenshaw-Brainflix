const express = require('express');
const router = require('express').Router();
// const comments = require('../data/videoDetails.json');
const videoDetails = require('../data/video-details.json');
const fs = require('fs');

// router.get('/', (req, res)=> {
//     fs.readFile('/Users/codycrenshaw/Desktop/Projects/Cody-Crenshaw-Brainflix/sprint-three/server/data/comments.json', (err, data) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         data = JSON.parse(data);
//         data.find(eL => )
//         res.send(data);
//     })
//     // res.send(comments);
// });

router.get('/:id', (req, res) => {
    fs.readFile('/Users/codycrenshaw/Desktop/Projects/Cody-Crenshaw-Brainflix/sprint-three/server/data/video-details.json', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        data = JSON.parse(data);
        const answer = data.find(eL => eL.id == req.params.id)
        console.log(data);
        res.send(answer);
    })
})

router.post('/:id', (req, res) => {
    fs.readFile('/Users/codycrenshaw/Desktop/Projects/Cody-Crenshaw-Brainflix/sprint-three/server/data/video-details.json', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        data = JSON.parse(data);
        console.log(req);
})
    
    
    
    // const videoId = req.params.id;
    // res.send(videoDetails.find(
    //     eL => eL.id == videoId




module.exports = router;