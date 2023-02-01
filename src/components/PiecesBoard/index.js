import React from "react";



const PiecesBoard = (props) => {
  const { side, active, boardIndex, color } = props

  const handleClick = () => {
    console.log('===> props', props)
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
