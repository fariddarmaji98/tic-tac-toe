import React, { useState, useEffect, useMemo } from "react";

import PiecesBoard from "../PiecesBoard";

const BOARD = 3*3;
const SET_WIN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

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
    const [boardConfig, setBoardConfig] = useState([])
    
    useEffect(() => {
        setBoardConfig(createBoardConfig(BOARD))
    }, [])

    useEffect(() => {
        console.log('===> playerSide', playerSide)
    }, [playerSide])

    const handleClick = () => {
        setPlayerSide({
            player1: SIDE.O,
            player2: SIDE.X,
        })
    }

    const createBoardConfig = (lengthBoard = 0) => {
        let index = 0;
        let config = []
        while (index < lengthBoard) {
            console.log('===> index', index)
            config = [...config, {
                side: '',
                active: false, 
                boardIndex: index,
                color: ''
            }]
            index++;
        }

        return config
    }

    const generatePiecesBoard = useMemo(() => {   
        // console.log('===> boardConfig', boardConfig)
        return <PiecesBoard 
            side={SIDE.O} 
            active={false} 
            boardIndex={1} 
            color={'text-red-700'} 
        />
        // return(<>
        //     <PiecesBoard side={SIDE.O} active={false} boardIndex={1} color={'text-red-700'} />
        //     <PiecesBoard side={SIDE.X} active={false} boardIndex={1} color={'text-green-700'} />
        // </>)
    }, [boardConfig])
    
    return(<>
        <button onClick={() => handleClick()}>
            Hallo
        </button>
        <div className="text-neutral-800 flex flex-wrap">
            {generatePiecesBoard}
        </div>
    </>)
}


export default Board
