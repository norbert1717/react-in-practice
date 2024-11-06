/* 

app függvényen belül így tudjuk megadni az adatokat(data, setData), majd a
useState-t kiválasztom a listából és beimportálja
useeffect mindig lefut betöltődéskor
  - listából kiválasztani majd utána beimportálja
  - első betöltésnél MINDEN useeffect lefut, lehet több is
  - utána akkor fut le, ha a dependency array-ben [] valami megváltozik
  - useeffect függvénnyel nem fut le végtelenszer a kód
  - így néz ki egy fetch reactben

jsx-ben kapcsos zárójellel lehet kódot illeszteni a html-be, map segítségével
  - kell a data && data.map a sikeres futáshoz, utána nem lesz null az értéke a datának
  - data && -> van adatom, amin le tudom futtatni a map-et
  - h2 tagbe rakom bele azt, amit meg akarok jeleníteni

key csak a react része, ha id-t akarjuk külön megadni,
azt külön propként kell megadni a Spell.jsx fájlban a Spell függvény paramétereként kapcsos zárójelben


*/

import { useEffect, useState } from "react";
import Spells from './components/Spells'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/spells")
      .then(res => res.json())
      .then(resData => setData(resData))
  }, [])

  //console.log("data", data);

  return (
    <div className="App">
      {data && <Spells data={data}/>}
    </div>
  );
}

export default App;
