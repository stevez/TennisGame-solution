

var Player = function(name) {
    this.name = name;
    this.point = 0;
    this.scoreMap = {0:"Love", 1:"Fifteen", 2:"Thirty", 3:"Fourty"};
    
    this.getPoint = function() {
        return this.point;
    }
    
    this.wonPoint = function() {
        this.point++;
    }
    
    this.getScore = function() {
        return this.scoreMap[this.point];
    } 
    
    this.beat = function(player,diff) {
        return this.point - player.point >= diff;
    }
    this.isTieWith = function(player) {
        return this.point == player.point;
    }
    this.hasWon = function(point) {
        return this.point >= point;
    }
}

module.exports = Player;
