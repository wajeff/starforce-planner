import { useState } from 'react'
import Calendar from './components/Calendar'
import BossSelection from './components/BossSelection'
import './App.css'


function App() {
  const [bosses, setBosses] = useState({
    Papulatus: {
      Normal: { clears: 0, value: 2664500 },
      Hard: { clears: 0, value: 26450000 }
    }, 
    Zakum:{
      Normal: { clears: 0, value: 2664500 },
      Hard: { clears: 0, value: 26450000 }
    },
    Arkarium:{
      Normal: { clears: 0, value: 2664500 },
      Hard: { clears: 0, value: 26450000 }
    },
  })

  const [maxClears, setMaxClears] = useState(0)  

  const updateClears = (bossName, difficulty, newValue) => {
    setBosses(prev => ({
      ...prev,
      [bossName]: {
        ...prev[bossName],
        [difficulty]: {
          ...prev[bossName][difficulty],
          clears: newValue
        }
      }
    }));
    setMaxClears(prev=> prev + newValue)
  };

          

  const weeklyClearLimit = [0,1,2,3,4,5,6,7,8,9,10,11,12]
  
  return (
    <>
      <h1>Starforce Planner</h1>
      <Calendar/>
      {
        Object.keys(bosses).map(key=>(
          <BossSelection 
            key={key}
            clears={bosses[key]}
            bossName={key}
            bosses={bosses}
            weeklyClearLimit={weeklyClearLimit}
            updateClears={updateClears}
          />
        ))
      }
      <div>
        {maxClears > 180 ? 'You are selling too many crystals' : null}
        {maxClears}
      </div>
      

    </>
  )
}

export default App
