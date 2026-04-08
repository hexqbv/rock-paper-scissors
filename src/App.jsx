import React, { useState } from 'react'

const App = () => {
  
  const [playerMove, changePlayerMove] = useState("🪨")
  const [compMove, changeCompMove] = useState("🪨")
  const [playerScore, changePlayerScore] = useState(0)
  const [compScore, changeCompScore] = useState(0)
  const [winStreak, changeWinStreak] = useState(0)
  const [moveHistory, changeMoveHistory] = useState([])

  function getRoundWinner(p, c) {
    if ((p==='🪨' && c==='✂️') || (p==='✂️' && c==='📄') || (p==='📄' && c==='🪨')) {
      return 'Player'
    }
    if ((c==='🪨' && p==='✂️') || (c==='✂️' && p==='📄') || (c==='📄' && p==='🪨')) {
      return 'Computer'
    }
    return 'Draw'
  }

  function score(p, c){
    const winner = getRoundWinner(p, c)

    if (winner === 'Player'){
      changePlayerScore((playerScore)=> playerScore +=1 )
      changeWinStreak((currentStreak) => currentStreak + 1)
    } else if (winner === 'Computer'){
      changeCompScore((compScore) => compScore +=1 )
      changeWinStreak(0)
    } else {
      changeWinStreak(0)
    }

    return winner
  }

  function setComp() {

    const comp = Math.floor(Math.random() * 3) + 1

    return comp === 1 ? "🪨" : comp === 2 ? "📄" : "✂️"
  }

  function decide(playerChoice) {

    
    let compChoice = setComp()
    const roundWinner = score(playerChoice, compChoice)
    changeMoveHistory((history) => [...history, `${compChoice} : ${playerChoice} - ${roundWinner}`])
    
    changePlayerMove(playerChoice)
    changeCompMove(compChoice)
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <h3>Computer : Player</h3>

      <h3>{compMove} : {playerMove}</h3>

      <h3>{compScore}:{playerScore}</h3>
      <h3>Win streak: {winStreak}</h3>

      <button onClick={()=>{
        decide("🪨")
      }}>🪨</button>
      <button onClick={()=>{
        decide("📄")
      }}>📄</button>
      <button onClick={()=>{
        decide("✂️")
      }}>✂️</button>
      <button onClick={() => {location.reload()}}>reset</button>

      <h3>Move history</h3>
      {moveHistory.length === 0 ? (
        <p>No moves yet</p>
      ) : (
        <ul>
          {[...moveHistory].reverse().map((move, index) => (
            <li key={`${move}-${index}`}>{move}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
