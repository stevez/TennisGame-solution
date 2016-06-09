import spock.lang.Specification
import spock.lang.Unroll


class TennisGameTest extends Specification {
 
	def game 
	
	def setup() {
		game = new TennisGame("player1", "player2")
	}
	
	@Unroll
	def "#player1 : #player2 => #expected_score"(player1, player2, expected_score) {
		
		wonPoints("player1", player1)
		wonPoints("player2", player2)
		
		expect:
		  game.getScore() == expected_score
		
		where:
		      player1 | player2 | expected_score
		            0 |       0 | "Love-All"
					1 |       1 | "Fifteen-All"
					2 |       2 | "Thirty-All"
					0 |       1 | "Love-Fifteen"
					1 |       0 | "Fifteen-Love"
					0 |       2 | "Love-Thirty"
					0 |       3 | "Love-Forty"
					3 |       3 | "Deuce"
					4 |       4 | "Deuce"
					3 |       4 | "Advantage player2"
					4 |       3 | "Advantage player1"
					4 |       0 | "Win for player1"
		            0 |       4 | "Win for player2"
					6 |       4 | "Win for player1"
	}
	
	def wonPoints(name, points) {
		for(int i=0; i<points; i++) {
			game.wonPoint(name)
		}
	}
}
