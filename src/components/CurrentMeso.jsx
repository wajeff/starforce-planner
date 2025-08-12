const CurrentMeso = ({currentMeso, handleCurrentMeso}) => {
  return (
    <div>
      <h2>Current Mesos</h2>
      <input
      placeholder={currentMeso ? `${currentMeso/1_000_000} Million` : 'Million'}
      onChange={handleCurrentMeso}>
      </input>
    </div>
  )
}

export default CurrentMeso