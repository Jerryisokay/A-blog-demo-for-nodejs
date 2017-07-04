var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
	res.send('from the router');
})

module.exports = router;