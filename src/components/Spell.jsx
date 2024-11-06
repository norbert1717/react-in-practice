/* 
klikk esemény hatására lenyílik a varázslat leírása
kell egy segédfüggvény(handleclick)
és itt is kell a useState

*/

import { useState, useRef, useEffect } from "react";
import './Spell.css';

function Spell({ name, desc }) {
  const [show, setShow] = useState(false);
  const [pHeight, setPHeight] = useState(0);
  const pRef = useRef(null);

  const handleClick = () => setShow(!show);

  useEffect(() => {
    if (pRef && pRef.current) setPHeight(pRef.current.clientHeight);
  }, [pRef, show]);

  return (
    <div className="spell" style={show ? { height: 111.2 + pHeight } : { height: 91.2 }} >
      <h2 onClick={handleClick}>{name}</h2>
      {show && <p ref={pRef}>{desc}</p>}
    </div>
  )
}

export default Spell;