var assert = require("chai").assert;
var TennisGame = require("../src/TennisGame");


describe('Tennis Score', function() {
    
     var tests = [
      [0, 0, "Love-All"],
      [1, 1, "Fifteen-All"],
      [2, 2, "Thirty-All"],
      [3, 3, "Deuce"],
      [4, 4, "Deuce"],
      
      [0, 1, "Love-Fifteen"],
      [1, 0, "Fifteen-Love"],
      [0, 2, "Love-Thirty"],
      [2, 0, "Thirty-Love"],
      [0, 3, "Love-Fourty"],
      [3, 0, "Fourty-Love"],
      
      [0, 4, "Win for player2"],
      [4, 0, "Win for player1"],
      [4, 1, "Win for player1"], 
      [1, 4, "Win for player2"], 
      [4, 2, "Win for player1"], 
      [2, 4, "Win for player2"], 
      
      [4, 3, "Advantage player1"], 
      [3, 4, "Advantage player2"],
      
      [5, 4, "Advantage player1"], 
      [4, 5, "Advantage player2"], 
      [15, 14, "Advantage player1"], 
      [14, 15, "Advantage player2"], 
      
      
      [6, 4, "Win for player1"], 
      [4, 6, "Win for player2"], 
      [16, 14, "Win for player1"], 
      [14, 16, "Win for player2"] 
                
  ];  
  
    
   function checkScore(pointPlayer1,pointPlayer2) {
      var game = new TennisGame("player1","player2");  
      updateScore(game,"player1", pointPlayer1);
      updateScore(game,"player2", pointPlayer2);
      
      return game.getScore();
      
   }
   
   function updateScore(game,name,point) {
       for(var i=0; i<point; i++) {
           game.wonPoint(name);
       }
       
      
   }
   
   tests.forEach(function(test) {
    it(test[0] + ':' + test[1] + '-> ' + test[2], function() {
      var result = checkScore(test[0], test[1]);
      assert.equal(result, test[2]);
    });
  });
  
});
    



    
