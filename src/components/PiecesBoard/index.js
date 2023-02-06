import React, { useState } from "react";

const PiecesBoard = (props) => {
  const [side, setSide] = useState('')
  const [color, setColor] = useState('')

  const { boardIndex, turnToPlay, setTurnToPlay, players, setPlayers, setsWin, player1Road, setPlayer1Road, player2Road, setPlayer2Road } = props

  const handleClick = () => {
    if (!!side?.length) return

    console.log('===> props', props)
    // console.log('===> setsWin', setsWin)

    const newTurnToPlay = (turnToPlay === 0) ? 1 : 0
    const playerWaitingPlay = players.filter(player => player.player !== turnToPlay)
    const playerToPlay = players.filter(player => player.player === turnToPlay)[0]
    const playerRoad = [...playerToPlay.road , boardIndex]
    const win = setsWin.filter(setWin => setWin.toString() === playerRoad.toString())

    setSide(playerToPlay?.side || '')
    setColor(playerToPlay?.color)
    
    setPlayers([...playerWaitingPlay, {
      ...playerToPlay,
      road: playerRoad.sort(),
      win
    }])

    setTurnToPlay(newTurnToPlay)
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
