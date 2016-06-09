
class Player {

	def name
	
	int point
	
	def score_map = [0:"Love", 1:"Fifteen", 2:"Thirty", 3:"Forty"]
	
	def Player(name) {
		this.name = name
	}
	
	def addPoint() {
		this.point++
	}
	
	def getScore() {
	    score_map[point]	
	}
}
