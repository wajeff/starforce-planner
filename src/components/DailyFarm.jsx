const DailyFarm = ({dailyFarm, handleDailyFarm}) => {
  return (
    <div>
      <h2>
        Daily Farm
      </h2>
      <div>
        <input 
        onChange={handleDailyFarm}
        value={dailyFarm}
        placeholder='Million' />
      </div>
      
    </div>
  )
}

export default DailyFarm