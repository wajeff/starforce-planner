const CurrentMeso = ({currentMeso, handleCurrentMeso}) => {
  return (
    <div>
      <input
      placeholder={currentMeso ? `${currentMeso/1_000_000} Million` : 'Million'}
      onChange={handleCurrentMeso}>
      </input>
    </div>
  )
}

export default CurrentMeso