import { useState } from 'react'
import { useEffect } from 'react'
import Calendar from './components/Calendar'
import BossSelection from './components/BossSelection'
import './App.css'
import Reboot from './components/Reboot'
import Values from './components/Values'
import Ursus from './components/Ursus'

function App() {
  const [total, setTotal] = useState(0)
  const [reboot, setReboot] = useState(0)
  const rebootToggle = (e) =>{
    setReboot(e.target.checked ? 5 : 1)
  }
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
  };
  
  const [maxClears, setMaxClears] = useState(0)  
  const [totalValue, setTotalValue] = useState(0)
  const weeklyClearLimit = [0,1,2,3,4,5,6,7,8,9,10,11,12]
  const [level, setLevel] = useState(0)
  const [ursus, setUrsus] = useState({
    clears : 3, level: level, mesosPerLevel: 13820.625
  })
  const [ursusBoolean, setUrsusBoolean] = useState(false)
  const ursusToggle = (e)=>{
    setUrsusBoolean(
      prev=> !prev 
    )
  }
  const handleUrsus =(e)=>{
    const currentLevel = e.target.value
    setLevel(currentLevel)
  }
  function usrusCalculation(level, reboot){
    const sRankMesoUnits = 1842.75
    let mesoBase = 0
    if(level%2===0){
      mesoBase = level * 7.5
    }
    else{
      mesoBase = (level + (14/15)) * 7.5
    }
    return mesoBase * sRankMesoUnits * reboot
  }
 
  
  return (
    <>
      <h1>Starforce Planner</h1>
      <Calendar/>
      <Reboot
        reboot={reboot}
        setReboot={setReboot}
        rebootToggle={rebootToggle}
      />

      <Values
        maxClears = {maxClears}
        setMaxClears = {setMaxClears}
        totalValue = {totalValue}
        setTotalValue = {setTotalValue}
        bosses={bosses}
        reboot={reboot}
        ursus={ursus}
        total={total}
        setTotal= {setTotal}
        level={level}
      />
      <Ursus
        ursus={ursus}
        setUrsus={setUrsus}
        level={level}
        setLevel={setLevel}
        handleUrsus={handleUrsus}
        ursusToggle={ursusToggle}
        ursusBoolean={ursusBoolean}
        usrusCalculation={usrusCalculation}
        reboot={reboot}
      />
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
      
    </>
  )
}

export default App
