import React from "react";

const PiecesBoard = ({ 
  side, active, boardIndex, color
}) => {
  return (<>
    <div className="w-36 h-36 border-2 border-solid border-sky-900 flex justify-center align-middle">
      <span className={`text-9xl font-light ${color}`}>
        {side}
      </span>
    </div>
  </>);
}
 
export default PiecesBoard;
