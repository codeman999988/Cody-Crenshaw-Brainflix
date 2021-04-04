const express = require('express');
const router = require('express').Router();
// const comments = require('../data/videoDetails.json');
// const videoDetails = require('../data/video-details.json');
const fs = require('fs');
const path = require ('path');
function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  };





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

router.get('/:id/comments', (req, res) => {
    fs.readFile(path.resolve('../../sprint-three/server/data/video-details.json'), (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        data = JSON.parse(data);

        const answer = data.find(eL => eL.id == req.params.id);
        res.send(answer);
    }) 
}) 

router.post('/:id/comments', (req, res) => {
    fs.readFile(path.resolve('../../sprint-three/server/data/video-details.json'), (err, data) => {    if (err){
        console.error(err);
        return; 
    }
        data = JSON.parse(data);

        const videoId = data.find(eL => eL.id == req.params.id);
        // console.log('data',data);



        videoId.comments.push(req.body);


        fs.writeFile(path.resolve('../../sprint-three/server/data/video-details.json'), JSON.stringify(data), (err,data) => {
            res.json(data)
        })

        


        
        
        
        // if (err) {
        //     console.error(err);
        //     return;
        // }
        // data = JSON.parse(data);
        // console.log(req.params)

})})
router.delete("/:videoId/comments/:commentId", (req, res)=>{
    console.log(req.params);
    fs.readFile(path.resolve('../../sprint-three/server/data/video-details.json'), (err, data) => {    if (err){
        console.error(err);
        return; 
    }
    console.log(req.params.commentId);
    let answer = JSON.parse(data);
    let realvideo = answer.find(el=> el.id == req.params.videoId);
    let videoindex = answer.indexOf(realvideo);
    let letsGo = realvideo.comments.find(com=> com.id == req.params.commentId);
    let commentindex = realvideo.comments.indexOf(letsGo);
    let finalAnswer = answer[videoindex].comments[commentindex];
    const newComments = []
    for(let i=0; i<answer[videoindex].comments.length; i++){
        if (answer[videoindex].comments[i].id != req.params.commentId){
            newComments.push(answer[videoindex].comments[i])
        }
    }
    console.log(req.params.commentId);
      console.log(newComments);
      answer[videoindex].comments = newComments;
    //   console.log(answer);
        fs.writeFile(path.resolve('../../sprint-three/server/data/video-details.json'), JSON.stringify(answer), (err,data) => {
            res.json(answer)
        })
      







})


})
    
    
    
    // const videoId = req.params.id;
    // res.send(videoDetails.find(
    //     eL => eL.id == videoId




module.exports = router;