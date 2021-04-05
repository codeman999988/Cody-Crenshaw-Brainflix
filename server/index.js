const express = require('express');
const app = express();
const SERVER_PORT = 8080;
const router = express.Router();
const videoRoutes = require('./routes/videos.js');
const cors = require('cors');
const commentRoutes = require('./routes/comments.js');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())                    
app.use(cors())
app.use(express.static('/server/public'))


app.use('/videos', videoRoutes);
app.use('/video-details', commentRoutes)


app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`);
});
