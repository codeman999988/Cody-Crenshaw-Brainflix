const router = require('express').Router();

router.get('/', (req, res)=> {
res.send('User GET Endpoint Reached');
});



module.exports = router;