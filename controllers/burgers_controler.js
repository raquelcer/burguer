var express = require("express");
var router = express.Router();

//import the model (burger.js) to use its database
var burger = require("../models/burger.js");

//Create all our routes and set up logic within those routes whre required
router.get("/", function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req,res){
    burger.insertOne([
        'burger_name'
    ],[
        req.body.burger_name
    ], function(data){
        res.redirect('/');
    });
});


router.put('/burgers/:id', function(req, res){
    var condition = 'id = ' + req.params.id;
    burger.updateOne({
        devoured: true
    }, condition, function(data){
        res.redirect('/');
    });
    });

    //Export routes for server.js to use
    module.exports = router;