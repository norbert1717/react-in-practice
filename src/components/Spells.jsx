/* 
külön konténert hoztunk létre, h külön css filet tudjunk létrehozni
*/

import Spell from "./Spell";
import './Spells.css';

function Spells({ data }) {
  return (
    <div className="spells">
      {data.map(spell => <Spell key={spell.id} name={spell.name} desc={spell.description} />)}
    </div>
  )
}

export default Spells;