import { useState } from 'react'
import Calendar from './components/Calendar'
import BossSelection from './components/BossSelection'
import './App.css'


function App() {
  const [bosses, setBosses] = useState({
    Papulatus: {
      Easy: { clears: 0, value: 684500 },
      Normal: { clears: 0, value: 2664500 },
      Hard: { clears: 0, value: 26450000 }
    }, 
    Zakum:{
      Easy: { clears: 0, value: 684500 },
      Normal: { clears: 0, value: 2664500 },
      Hard: { clears: 0, value: 26450000 }
    },
    Arkarium:{
      Easy: { clears: 0, value: 684500 },
      Normal: { clears: 0, value: 2664500 },
      Hard: { clears: 0, value: 26450000 }
    },
  })

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
            updateClears={(difficulty, newValue) =>
              setBosses(prev => ({
                ...prev,
                  key: {
                    ...prev.key,
                    [difficulty]: {
                      ...prev.key[difficulty],
                      clears: newValue
                    }
                  }
              }))
            }
          />
        ))
      }
      

    </>
  )
}

export default App
