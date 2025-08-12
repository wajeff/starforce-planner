const Ursus = ({ ursus, handleUrsus, reboot,daysDifference}) => {
  return (
    <div>
      <h2>Ursus</h2>
      {}
      <input
        type="number"
        id="level"
        name='level'
        minLength='3'
        maxLength='3'
        value={ursus.level}
        onChange={handleUrsus}
      >
      </input>
      <section>
        Your ursus clear value: {
          
         <div>{13820.625 * parseInt(ursus.level || 0) * 2 * reboot * 3 * (daysDifference||1)}</div>
          
        }
      </section>
    </div>
  )
}

export default Ursus