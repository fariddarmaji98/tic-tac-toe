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
        side: ''
    },
    {
        player: 2,
        name: 'player2',
        side: ''
    }
]

const randomInt = Math.floor(Math.random() * 2)

const Board = () => {
    const [players, setPlayers] = useState(initialPlayerSide)
    const [player1Road, setPlayer1Road] = useState([])
    const [player2Road, setPlayer2Road] = useState([])
    const [turnToPlay, setTurnToPlay] = useState('')
    const [boardConfig, setBoardConfig] = useState([])
    
    useEffect(() => {
        setBoardConfig(createBoardConfig(BOARD))
        setPlayers(players)
        startTurnToPlay()
    }, [])

    useEffect(() => {
        console.log('===> players', players)
        console.log('===> player1Road', player1Road)
        console.log('===> player2Road', player2Road)

    }, [players, player1Road, player2Road])

    const setupPlayers = (players) => {
        const tempSide = SIDE

        let newPlayers = []
        players.map(player => {
            newPlayers = [...newPlayers, {
                ...player,
                side: tempSide.pop()
            }]
        })
    }

    const startTurnToPlay = () => {
        const getPlayer = players[randomInt]

        console.log('===> getPlayer', getPlayer)
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
        color={'text-green-700'}
        isFinish={false}
        turnToPlay={turnToPlay}
        setTurnToPlay={setTurnToPlay}
        setPlayer1Road={setPlayer1Road}
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
