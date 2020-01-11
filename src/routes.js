const express = require('express');
const router = express.Router();
const list_controller = require('./controllers/list')

//Get list
router.get('/ninjas', function(req, res, next){
    list_controller.get().then(function(list){
        res.send(list);
    });
});

//Add to list
router.post('/ninjas', function(req, res, next){
    list_controller.post(req.body).then(function(list){
        res.send(list);
    }).catch(next);
});

//Update
router.put('/ninjas/:id', function(req, res, next){
    console.log(1, req.params.id);
    
    list_controller.update({_id: req.params.id}, req.body).then(function(){
        console.log("after post", req.params.id);
        
        list_controller.findOne({_id: req.params.id}).then(function(list){
            console.log("after put", list);

            res.send(list);
        });
    });
});

//DELETE
router.delete('/ninjas/:id', function(req, res, next){
    list_controller.delete_item(req.params.id).then(function(list){
        res.send(list);
    }); 
});

module.exports = router;
