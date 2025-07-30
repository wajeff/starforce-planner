const Ursus = ({ ursus, handleUrsus, reboot}) => {
  return (
    <div>
    
      {}
      <input
        type="text"
        id="level"
        name='level'
        minLength='3'
        maxLength='3'
        onChange={handleUrsus}
      >
      </input>
      <section>
        Your ursus clear value: {
          
         <div>{13820.625 * parseInt(ursus.level) * 2 * reboot}</div>
          
        }
      </section>
    </div>
  )
}

export default Ursus