const express = require('express');
const app = express();
const SERVER_PORT = 8080;
const videoRoutes = require('./routes/videos.js');
const cors = require('cors');

app.use(cors())
app.use('/videos', videoRoutes);


app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`);
});
