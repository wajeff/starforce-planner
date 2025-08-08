const DailyFarm = ({daysDifference, dailyFarm, setDailyFarm, handleDailyFarm}) => {
  return (
    <div>
      <h2>
        Daily Farm
      </h2>
      <div>
        <input 
        type='number'
        onChange={handleDailyFarm}
        value={dailyFarm}
        placeholder='Million' />
      </div>
      
    </div>
  )
}

export default DailyFarm