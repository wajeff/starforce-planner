import { useState } from 'react'
import { useEffect } from 'react'
import Calendar from './components/Calendar'
import BossSelection from './components/BossSelection'
import './App.css'
import Reboot from './components/Reboot'
import Values from './components/Values'
import Ursus from './components/Ursus'
import MapleTour from './components/MapleTour'
import DailyFarm from './components/DailyFarm'

function usePersistentState(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const cached = localStorage.getItem(key);
    return cached ? JSON.parse(cached) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
  }

function App() {
  const today=new Date().toISOString().split('T')[0]
  const [daysDifference, setDaysDifference] = useState(0)
  const [weeklyResetCount, setWeeklyResetCount] = useState(0)

  const handleCalendar=(e)=>{
    setWeeklyResetCount(0)
    const date = e.target.value
    const selected = new Date(date);
    const current = new Date(today);
    let diffInDays = (selected-current) / (1000 * 60 * 60 * 24)
    setDaysDifference(diffInDays)
    let thursdayCount = 0;
    for(let i=0; i<diffInDays; i++){
      current.setDate(current.getDate()+1)  
      if(current.getDay()===3){
        thursdayCount++
      }
    }
    setWeeklyResetCount(thursdayCount)
  }

  const [total, setTotal] = useState(0)
  const [reboot, setReboot] = useState(1)
  const rebootToggle = (e) =>{
    setReboot(e.target.checked ? 5 : 1)
  }


  const [dailyFarm, setDailyFarm] = useState(0)
  const handleDailyFarm = (e)=>{
    setDailyFarm(e.target.value)
  }
  const [dailyBosses, setDailyBosses] = usePersistentState("dailyBosses", {
    Zakum:{
      Easy: { clears: 0, value: 200_000 },
      Normal: { clears: 0, value: 612_500 }
    },
    Papulatus: {
      Easy: { clears: 0, value: 684_500
      },
      Normal: { clears: 0, value: 2_664_500}
    }, 
    Magnus: {
      Easy: { clears: 0, value: 722_000
      },
      Normal: { clears: 0, value: 2_592_000
    }
    },
    Hilla:{
      Normal: { clears: 0, value: 800_000
    }
    },
    Arkarium:{
      Normal: { clears: 0, value: 1_152_000 },
      Hard: { clears: 0, value: 2_520_500 }
    },
    Ranmaru:{
      Normal: { clears: 0, value: 840_500 },
      Hard: { clears: 0, value: 2_664_500 }
    },
    Horntail:{
      Easy: { clears: 0, value: 882_000},
      Normal: { clears: 0, value: 840_500 },
      Hard: { clears: 0, value: 2_664_500 }
    },
    Pierre:{
      Normal: { clears: 0, value: 968_000 },
    },
    'Von Bon':{
      Normal: { clears: 0, value: 968_000 },
    },
    'Crimson Queen':{
      Normal: { clears: 0, value: 968_000 },
    },
    Vellum:{
      Normal: { clears: 0, value: 968_000 },
    },
    'Von Leon':{
      Easy: { clears:0, value: 1_058_000},
      Normal: { clears: 0, value: 1_458_000 },
      Hard: { clears: 0, value: 2_450_000 }
    },
    'OMNI-CLN':{
      Normal: { clears: 0, value: 1_250_000 },
    },
    'Pink Bean':{
      Normal: { clears: 0, value: 1_404_500}
    }
  })

  const [weeklyBosses, setWeeklyBosses] = usePersistentState("weeklyBosses", {
  Cygnus: {
    Easy:   { clears: 0, value: 9_112_500 },
    Normal: { clears: 0, value: 14_450_000 }
  },
  Hilla: {
    Hard: { clears: 0, value: 11_250_000 }
  },
  'Pink Bean': {
    Chaos: { clears: 0, value: 12_800_000 }
  },
  Zakum: {
    Chaos: { clears: 0, value: 16_200_000 }
  },
  Pierre: {
    Chaos: { clears: 0, value: 16_200_000 }
  },
  'Von Bon': {
    Chaos: { clears: 0, value: 16_200_000 }
  },
  'Crimson Queen': {
    Chaos: { clears: 0, value: 16_200_000 }
  },
  'Princess No': {
    Normal: { clears: 0, value: 16_200_000 }
  },
  Magnus: {
    Hard: { clears: 0, value: 19_012_500 }
  },
  Vellum: {
    Chaos: { clears: 0, value: 21_012_500 }
  },
  Papulatus: {
    Chaos: { clears: 0, value: 26_450_000 }
  },
  'Akechi Mitsuhide': {
    Normal: { clears: 0, value: 28_800_000 }
  },
  Lotus: {
    Normal: { clears: 0, value: 32_512_500 },
    Hard:   { clears: 0, value: 74_112_500 }
  },
  Damien: {
    Normal: { clears: 0, value: 33_800_000 },
    Hard:   { clears: 0, value: 70_312_500 }
  },
  'Guardian Angel Slime': {
    Normal: { clears: 0, value: 34_322_000 },
    Chaos:  { clears: 0, value: 90_312_500 }
  },
  Lucid: {
    Easy:   { clears: 0, value: 35_112_500 },
    Normal: { clears: 0, value: 40_612_500 },
    Hard:   { clears: 0, value: 80_000_000 }
  },
  Will: {
    Easy:   { clears: 0, value: 38_255_000 },
    Normal: { clears: 0, value: 46_512_500 },
    Hard:   { clears: 0, value: 88_200_000 }
  },
  Gloom: {
    Normal: { clears: 0, value: 49_612_500 },
    Chaos:  { clears: 0, value: 92_450_000 }
  },
  Darknell: {
    Normal: { clears: 0, value: 52_812_500 },
    Hard:   { clears: 0, value: 96_800_000 }
  },
  'Versus Hilla': {
    Normal: { clears: 0, value: 89_520_000 },
    Hard:   { clears: 0, value: 110_450_000 }
  },
  'Chosen Seren': {
    Normal:  { clears: 0, value: 133_687_500 },
    Hard:    { clears: 0, value: 151_250_000 },
    Extreme: { clears: 0, value: 605_000_000 }
  },
  'Kalos the Guardian': {
    Easy:    { clears: 0, value: 150_000_000 },
    Normal:  { clears: 0, value: 200_000_000 },
    Chaos:   { clears: 0, value: 400_000_000 },
    Extreme: { clears: 0, value: 800_000_000 }
  },
  Kaling: {
    Easy:    { clears: 0, value: 150_000_000 },
    Normal:  { clears: 0, value: 230_000_000 },
    Hard:    { clears: 0, value: 460_000_000 },
    Extreme: { clears: 0, value: 920_000_000 }
  }
})

  const updateClears = (setBosses, bossName, difficulty, newValue) => {
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

  const weeklyClearLimit = [0,1,2,3,4,5,6,7,8,9,10,11,12]

  const [ursus, setUrsus] = useState({
    clears : 3, level: 0, mesosPerLevel: 13820.625
  })
  const handleUrsus =(e)=>{
    const currentLevel = e.target.value
    setUrsus(prev => ({
    ...prev,
    level: currentLevel
  }));
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
 
  const [mapleTour, setMapleTour] = useState({
    clears: 0, value: 5446815
  })
  const handleTour = (e) => {
    let input = parseInt(e.target.value);
    let currentClears = input;

    if (input > 49) {
      currentClears = 49;
      setTimeout(() => {
        e.target.value = 49;
      }, 300);
    }

    setMapleTour(prev => ({
      ...prev,
      clears: currentClears
    }));
  };
  // useEffect(()=>{
  //   console.log(mapleTour)
  // },[mapleTour])

  return (
    <>
      <h1>Starforce Planner</h1>
      <Calendar
        handleCalendar={handleCalendar}
      />
      <Reboot
        reboot={reboot}
        setReboot={setReboot}
        rebootToggle={rebootToggle}
      />

      <Values
        maxClears = {maxClears}
        setMaxClears = {setMaxClears}
        dailyBosses={dailyBosses}
        reboot={reboot}
        ursus={ursus}
        mapleTour={mapleTour}
        daysDifference={daysDifference}
        total={total}
        setTotal= {setTotal}
        weeklyResetCount={weeklyResetCount}
        weeklyBosses={weeklyBosses}
        dailyFarm={dailyFarm}
      />
      <DailyFarm
        daysDifference={daysDifference}
        dailyFarm={dailyFarm}
        setDailyFarm={setDailyFarm}
        handleDailyFarm={handleDailyFarm}
      />
      <Ursus
        ursus={ursus}
        setUrsus={setUrsus}
        daysDifference={daysDifference}
        handleUrsus={handleUrsus}
        usrusCalculation={usrusCalculation}
        reboot={reboot}
      />
      <MapleTour
        mapleTour={mapleTour}
        setMapleTour={setMapleTour}
        handleTour={handleTour}
        reboot={reboot}
      />
      {
        Object.keys(dailyBosses).map(key=>(
          <BossSelection 
            key={key}
            clears={dailyBosses[key]}
            bossName={key}
            bosses={dailyBosses}
            reboot={reboot}
            weeklyClearLimit={weeklyClearLimit}
            updateClears={updateClears}
            setBosses={setDailyBosses}
          />
        ))
      }
      {
        Object.keys(weeklyBosses).map(key=>(
          <BossSelection 
            key={key}
            clears={weeklyBosses[key]}
            bossName={key}
            bosses={weeklyBosses}
            reboot={reboot}
            weeklyClearLimit={weeklyClearLimit}
            updateClears={updateClears}
            setBosses={setWeeklyBosses}
          />
        ))
      }
      
    </>
  )
}

export default App
