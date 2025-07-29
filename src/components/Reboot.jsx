
const Reboot = ({reboot, setReboot, rebootToggle}) => {
  return (
    <section>
      Reboot
      <input
        type='checkbox'
        id='rebootToggle'
        onChange={rebootToggle}/>
    </section>
  )
}

export default Reboot