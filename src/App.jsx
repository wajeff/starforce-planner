import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calendar from './components/Calendar'
import BossSelection from './components/BossSelection'
import './App.css'

const bosses = {
  Papulatus:{
    Easy:{Clears: 0, value: 684500}, 
    Normal:{Clears: 0, value: 2664500}, 
    Hard: {Clears: 0, value: 26450000}
  },
}



function App() {

  return (
    <>
     <h1>Starforce Planner</h1>
     <Calendar/>
     <BossSelection bossName ={'Papulatus'} bosses={bosses}/>
    </>
  )
}

export default App
