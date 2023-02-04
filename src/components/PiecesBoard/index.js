import React, { useState } from "react";

const PiecesBoard = (props) => {
  const [side, setSide] = useState('')
  const [color, setColor] = useState('')

  const { boardIndex, turnToPlay, setTurnToPlay, players, player1Road, setPlayer1Road, player2Road, setPlayer2Road } = props

  const handleClick = () => {
    console.log('===> players[turnToPlay]', players[turnToPlay])

    setSide(players[turnToPlay]?.side || '')
    setColor(players[turnToPlay]?.color)

    if (turnToPlay === 0) {
      setTurnToPlay(1)
      setPlayer1Road([...player1Road, boardIndex])
      return
    }
    
    setTurnToPlay(0)
    setPlayer2Road([...player2Road, boardIndex])
  }

  return (<>
    <div 
      className="w-36 h-36 border-2 border-solid border-sky-900 flex justify-center align-middle"
      onClick={() => handleClick()}
    >
      <span className={`text-9xl font-light ${color}`}>
        {side}
      </span>
    </div>
  </>);
}
 
export default PiecesBoard;
