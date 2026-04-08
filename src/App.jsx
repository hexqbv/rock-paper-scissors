import React, { useState } from 'react'

const App = () => {
  
  const [playerMove, changePlayerMove] = useState("🪨")
  const [compMove, changeCompMove] = useState("🪨")
  const [playerScore, changePlayerScore] = useState(0)
  const [compScore, changeCompScore] = useState(0)

  function score(p, c){
    if ((p==='🪨' && c==='✂️') || (p==='✂️' && c==='📄') || (p==='📄' && c==='🪨')){
      changePlayerScore((playerScore)=> playerScore +=1 )
    } else if ( (c==='🪨' && p==='✂️') || (c==='✂️' && p==='📄') || (c==='📄' && p==='🪨') ){
      changeCompScore((compScore) => compScore +=1 )
    }
  }

  function setComp() {

    const comp = Math.floor(Math.random() * 3) + 1

    return comp === 1 ? "🪨" : comp === 2 ? "📄" : "✂️"
  }

  function decide(playerChoice) {

    
    let compChoice = setComp()
    score(playerChoice, compChoice)
    
    changePlayerMove(playerChoice)
    changeCompMove(compChoice)
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <h3>Computer : Player</h3>

      <h3>{compMove} : {playerMove}</h3>

      <h3>{compScore}:{playerScore}</h3>

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
    </div>
  )
}

export default App
