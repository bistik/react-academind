import { useState } from "react"

export default function Player({initName, symbol, isActive, onChangeName}) {
  const [playerName, setPlayerName] = useState(initName);
  const [isEditing, setIsEditing] = useState(false);

  let btnText = 'Edit';
  function handleClick() {
    setIsEditing(isEditing => !isEditing)
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      {isEditing ?
       <input type="text" value={playerName} onChange={handleChange} required></input> :
       <span className="player-name">{playerName}</span>
       }
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}