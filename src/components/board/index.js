import React, { useState, useEffect, useMemo } from "react";
import CONSTANS from '../../constants'

const SIDE = {
    X: 'x',
    O: 'o'
}

const initialPlayerSide = {
    player1: SIDE.X,
    player2: SIDE.O
}

// Math.floor(Math.random() * max);

const Board = () => {
    const [playerSide, setPlayerSide] = useState(initialPlayerSide)
    const [player1Road, setPlayer1Road] = useState([])
    const [player2Road, setPlayer2Road] = useState([])
    const [turnTo, setTurnTo] = useState('')

    useEffect(() => {
        console.log('===> playerSide', playerSide)
    }, [playerSide])

    const handleClick = () => {
        setPlayerSide({
            player1: SIDE.O,
            player2: SIDE.X,
        })
    }

    const makePiecesBoard = () => {

    }
    
    return(<>
        <button onClick={() => handleClick()}>
            Hallo
        </button>
    </>)
}


export default Board
