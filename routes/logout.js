var express = require('express');
var router = express.Router();

/* GET logout page. */
router.get('/',function(req,res){    
	req.session.user = null;
	req.session.error = null;
	res.redirect("/");
});

module.exports = router;