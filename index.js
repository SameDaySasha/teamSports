const team = {
  _players:[
    {firstName:'Joe1',lastName:'Shmoe1',age:18},
    {firstName:'Joe2',lastName:'Shmoe2',age:19},
    {firstName:'Joe3',lastName:'Shmoe3',age:20},
  ],
  _games:[
    {opponent:'Joe1',teamPoints:5,opponentPoints:9},
    {opponent:'Joe2',teamPoints:9,opponentPoints:1},
    {opponent:'Joe3',teamPoints:4,opponentPoints:4}
  ],
  get players(){
    return team._players
  },
  get games(){
    return team._games
  },
  addPlayer(newFirstName, newLastName, newAge){
   const player = {
    firstName:newFirstName,
    lastName:newLastName,
    age:newAge
   }
   this._players.push(player)
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    const game = {
      opponent:newOpponent,
      teamPoints:newTeamPoints,
      opponentPoints:newOpponentPoints
    }
    this._games.push(game)
  }
}
team.addPlayer('Bugs', 'Bunny',76)
team.addGame('Titans',100,98)
console.log(team._games)
console.log(team._players)
