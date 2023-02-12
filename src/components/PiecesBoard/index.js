import React, { useState } from "react";

const PiecesBoard = (props) => {
  const [side, setSide] = useState('')
  const [color, setColor] = useState('')

  const { boardIndex, turnToPlay, setTurnToPlay, players, setPlayers, setsWin, finish } = props

  // console.log('===> players', players)

  const handleClick = () => {
    if (!!side?.length || finish) return
    // console.clear()

    let win = [];
    const newTurnToPlay = (turnToPlay === 0) ? 1 : 0
    const playerWaitingPlay = players.filter(player => player.player !== turnToPlay)
    const playerToPlay = players.filter(player => player.player === turnToPlay)[0]
    const playerRoad = [...playerToPlay.road , boardIndex]
    
    setsWin.map(setWin => {
      const closeToVictory = playerRoad.map((road) => {
        const itemVictory = setWin.filter(itemWin => itemWin === road)
        return itemVictory[0] !== undefined ? itemVictory[0] : null
      })
      .filter(road => road !== null)
      
      win = [ ...win, closeToVictory ]
    })

    setSide(playerToPlay?.side || '')
    setColor(playerToPlay?.color)
    
    setPlayers([...playerWaitingPlay, {
      ...playerToPlay,
      road: playerRoad,
      win
    }])

    setTurnToPlay(newTurnToPlay)
  }

  return (<>
    <div 
      className="w-36 h-36 border-2 border-solid border-sky-900 flex justify-center items-center"
      onClick={() => handleClick()}
    >
      <span className={`text-9xl font-light ${color} ${!finish && 'animate-pulse'} -mt-6`}>
        {side}
      </span>
    </div>
  </>);
}

export default PiecesBoard;
