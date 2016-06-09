

var _ = require('lodash');
var Player = require('./Player');

var TennisGame = function(player1, player2) {
  this.players = [new Player(player1), new Player(player2)];
  
  
  this.wonPoint = function(playerName) {
   var player = findPlayerByName(this.players, playerName);
   player.wonPoint();
    
  }
  
  function findPlayerByName(players,playerName) {
      return  _.find(players, function(o) { return o.name == playerName});
  }
  
  function sortByPoints(players) {
       return _.sortBy(players, function(player) {return player.point;}).reverse();
  }
  
  this.getScore = function() {
      var result = "";
      
      var sorted = sortByPoints(this.players);
      var highPointPlayer = sorted[0];
      var lowPointPlayer = sorted[1];
      
      if(highPointPlayer.hasWon(4) && highPointPlayer.beat(lowPointPlayer,2)) {
          result = "Win for " + highPointPlayer.name;
      }
      else if(highPointPlayer.hasWon(4) && highPointPlayer.beat(lowPointPlayer,1) == 1) {
          result =  "Advantage " + highPointPlayer.name;
      }
      else if(highPointPlayer.hasWon(3) && highPointPlayer.isTieWith(lowPointPlayer)) {
          result =  "Deuce";
      }
      else if(highPointPlayer.isTieWith(lowPointPlayer)) {
           result = highPointPlayer.getScore()+ "-All";
      }
      else {
           result = this.players[0].getScore() + "-" + this.players[1].getScore();
      } 
      
      return result;
      
  }  
  
  };


module.exports = TennisGame;