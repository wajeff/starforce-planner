const MapleTour = ({mapleTour, setMapleTour, handleTour, reboot}) => {
  return (
    <div>
      <input
      type='number'
      onChange={handleTour}
      max='49'
      maxLength='2'>
      </input>
      <div>
        
        {`You are making ${mapleTour.clears*mapleTour.value*reboot} mesos`}
      </div>
    </div>
  )
}

export default MapleTour