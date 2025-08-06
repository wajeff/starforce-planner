const CurrentMeso = ({currentMeso, handleCurrentMeso}) => {
  return (
    <div>
      <input
      placeholder={currentMeso ? `${currentMeso} Million` : 'Million'}
      onChange={handleCurrentMeso}>
      </input>
    </div>
  )
}

export default CurrentMeso