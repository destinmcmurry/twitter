const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let allTweets = tweetBank.list();
  res.render( 'index', { tweets: allTweets } );
});

// change something
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweetsForName = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweetsForName } );
});


module.exports = router;