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

const initialPlayerSide = [
    {
        player: 1,
        name: 'player1',
        side: '',
        color: 'text-green-700'
    },
    {
        player: 2,
        name: 'player2',
        side: '',
        color: 'text-red-700'
    }
]

const randomInt = Math.floor(Math.random() * 2)

const Board = () => {
    const [players, setPlayers] = useState(initialPlayerSide)
    const [player1Road, setPlayer1Road] = useState([])
    const [player2Road, setPlayer2Road] = useState([])
    const [turnToPlay, setTurnToPlay] = useState(randomInt)
    const [boardConfig, setBoardConfig] = useState([])
    
    useEffect(() => {
        setBoardConfig(createBoardConfig(BOARD))
        setPlayers(players)
        setupPlayers()
    }, [])

    useEffect(() => {
        console.log('===> player1Road', player1Road)
        console.log('===> player2Road', player2Road)
    }, [player1Road, player2Road])

    const setupPlayers = () => {
        const tempSide = Object.values(SIDE)
        let newPlayers = []

        players.map(player => {
            const newSide = tempSide.pop()
            newPlayers = [...newPlayers, {
                ...player,
                side: newSide,
            }]
        })

        setPlayers([...newPlayers])
    }

    const handleClick = () => {}

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

    const generatePiecesBoard = boardConfig?.map((itemBoardConfig, index) => <PiecesBoard 
        key={index} 
        boardIndex={itemBoardConfig.boardIndex}
        isFinish={false}
        players={players}
        turnToPlay={turnToPlay}
        setTurnToPlay={setTurnToPlay}
        player1Road={player1Road}
        setPlayer1Road={setPlayer1Road}
        player2Road={player2Road}
        setPlayer2Road={setPlayer2Road}
    />)
    // return(<>
    //     <PiecesBoard side={SIDE.O} active={false} boardIndex={1} color={'text-red-700'} />
    //     <PiecesBoard side={SIDE.X} active={false} boardIndex={1} color={'text-green-700'} />
    // </>)
    
    return(<>
        <button onClick={() => handleClick()}>
            Hallo
        </button>
        <div className="text-neutral-800 flex flex-wrap justify-center max-w-lg border border-white">
            {generatePiecesBoard}
        </div>
    </>)
}


export default Board
