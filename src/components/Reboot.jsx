
const Reboot = ({reboot, setReboot, rebootToggle}) => {
  return (
    <section>
      Reboot
      <input
        type='checkbox'
        id='rebootToggle'
        onChange={rebootToggle}
        checked={reboot === 5}
      />
    </section>
  )
}

export default Reboot