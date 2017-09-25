var User = require('../models/user');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser').json();

// GET /users
// Get a list of users
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      return res.status(500).json({
        error: "Error listing users: " + err
      });
    }

    res.json(users);
  });
});

// GET /users/:id
// Get a user by ID
router.get('/:id', function(req, res) {
  User.findOne({
    _id: req.params.id
  }, function(err, user) {
    if (err) {
      return res.status(500).json({
        error: "Error reading user: " + err
      });
    }

    if (!user) {
      return res.status(404).end();
    }

    res.json(user);
  });
});

//POST /users
//Creates a user
router.post('/', bodyParser, function(req, res){
 var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err) {
      return res.status(500).json({
        error: "Error creating a user: " + err
      });
    }
    res.json(user);
  });
});

//PUT /user/:id
//Updates a user by ID
router.put('/:id', bodyParser, function(req, res){
  User.findOneAndUpdate({
    _id: req.params.id
  },
  req.body,
  {new: true},
  function(err, user){
    if (err) {
      return res.status(500).json({
        error: "Error updating user: " + err
      });
    }

    if (!user) {
      return res.status(404).end();
    }
    res.json(user);
  });
});

//DELETE /user/:id
//Deletes a user by ID
router.delete('/:id', function(req, res){
  User.remove({
    _id: req.params.id
  }, function(err, user){
    if (err) {
      return res.status(500).json({
        error: "Error deleting user: " + err
      });
    }
    res.json({message: 'User successfully deleted'});
  });
});

module.exports = router;
