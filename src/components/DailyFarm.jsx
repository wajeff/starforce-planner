const DailyFarm = ({daysDifference, dailyFarm, setDailyFarm, handleDailyFarm}) => {
  return (
    <div>
      <h2>
        Daily Farm
      </h2>
      <input 
        type='number'
        onChange={handleDailyFarm}>

      </input>
    </div>
  )
}

export default DailyFarm