
import React from "react";
import { MODE_CONF } from "../../constants";

const Menu = ({
  setMode
}) => {

  return (<>
    <button onClick={() => setMode(MODE_CONF?.MULTIPLAYER.key)} className="text-2xl font-verdana text-neutral-900 px-4 py-2 bg-yellow-400 rounded-lg shadow-2xl">
      Multiplayer
    </button>
    <button onClick={() => setMode(MODE_CONF?.VSAI.key)} className="text-2xl font-verdana text-neutral-900 px-4 py-2 bg-yellow-400 rounded-lg shadow-2xl">
      VS AI
    </button>
  </>)
}

export default Menu
