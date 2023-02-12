import React, { useState, useEffect, useMemo } from "react";

import Winner from "../winner";
import PiecesBoard from "../PiecesBoard";

import { MODE_CONF } from "../../constants";
import { RandomInt } from "../../utils/random";

const BOARD = 3*3;
const SETS_WIN = [
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
        player: 0,
        name: 'player1',
        side: '',
        color: 'text-green-700'
    },
    {
        player: 1,
        name: 'player2',
        side: '',
        color: 'text-red-700'
    }
]

const Board = ({
    mode
}) => {
    const [players, setPlayers] = useState(initialPlayerSide)
    const [turnToPlay, setTurnToPlay] = useState(RandomInt(2))
    const [boardConfig, setBoardConfig] = useState([])
    const [finish, setFinish] =useState(false)
    
    useEffect(() => {
        setBoardConfig(createBoardConfig(BOARD))
        setupPlayers()
    }, [])

    useEffect(() => {
        // console.clear()
        players.map(player => checkWin(player))
    }, [turnToPlay])

    const checkWin = (player) => {
        const { win } = player
        
        if (!win?.length) return;

        win.map(itemWin => {
            if (itemWin?.length !== 3) return;
            
            const playerNotWin = players.filter(itemPlayer => itemPlayer.player !== player.player)
            setPlayers([
                ...playerNotWin,
                {
                    ...player,
                    winner: [ ...itemWin ]
                }
            ])

            setFinish(true)
        })
    }

    const setupPlayers = () => {
        const tempSide = Object.values(SIDE)
        let newPlayers = []

        players.map(player => {
            const newSide = tempSide.pop()
            newPlayers = [...newPlayers, {
                ...player,
                side: newSide,
                road: []
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
        finish={finish}
        players={players}
        setPlayers={setPlayers}
        turnToPlay={turnToPlay}
        setTurnToPlay={setTurnToPlay}
        setsWin={SETS_WIN}
    />)

    const renderWinner = useMemo(() => <Winner finish={finish} players={players} />, [finish])
    
    return(<>
        <button onClick={() => handleClick()}>
            Hallo
        </button>
        {renderWinner}
        <div className="text-neutral-800 flex flex-wrap justify-center max-w-lg border border-white">
            {generatePiecesBoard}
        </div>
    </>)
}

export default Board
