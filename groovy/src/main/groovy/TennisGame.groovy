
class TennisGame {

	def players = []
	
	def TennisGame(player1, player2){
	   players << new Player(player1)
	   players << new Player(player2)	
	}
	
	def wonPoint(name) {
		players.find { it.name == name}.addPoint()
		
	}
	
	def getScore() {
		def result =""
		
		def sortedPlayers = players.clone().sort { it.point }.reverse()
		
		if(sortedPlayers[0].point >=4 && sortedPlayers[0].point - sortedPlayers[1].point >= 2) {
			result = "Win for ${sortedPlayers[0].name}"
		}
		else if(sortedPlayers.every { it.point >=3} ) {
			if(sortedPlayers[0].point - sortedPlayers[1].point == 1) {
				result = "Advantage ${sortedPlayers[0].name}"
			}
			else {
					result = "Deuce"
			}
		}
		else if(players[0].point == players[1].point) {
			    result = "${players[0].getScore()}-All"
		}
		else {
		   result = "${players[0].getScore()}-${players[1].getScore()}"
		}
		
		result
		
	}
}
