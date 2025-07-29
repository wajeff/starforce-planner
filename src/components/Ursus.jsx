const Ursus = ({level, setLevel, ursus, setUrsus, handleUrsus, ursusToggle, ursusBoolean, usrusCalculation, reboot}) => {
  return (
    <div>
      <input
        type = 'checkbox'
        id = 'ursus-on-off'
        name = 'ursus-on-off'
        onChange = {ursusToggle}
      >
      </input>
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
          
          ursusBoolean ? <div>{13820.625 * parseInt(ursus.level) * 2 * reboot}</div> : 0
          
        }
      </section>
    </div>
  )
}

export default Ursus