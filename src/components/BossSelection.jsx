const BossSelection = ({bossName, bosses, updateClears, weeklyClearLimit, reboot, setBosses}) => {
  return (
    <div>
      <h2>{bossName}</h2>
      <img src={`/public/bosses/${bossName}.webp`}></img>
      {Object.keys(bosses[bossName]).map((key) => (
        <section key={key}>
          <label htmlFor={`${bossName}-${key}-select`}>{key}</label>
          <select
            id={`${bossName}-${key}-select`}
            value={bosses[bossName][key].clears}
            onChange={(e) => updateClears(setBosses,bossName, key, parseInt(e.target.value))}
            >
              {weeklyClearLimit.map((number) => (
                <option key={number} value={number}>{number}</option>
              ))}
          </select>
          <div>Crystal Value: {(bosses[bossName][key].value)*reboot}</div>
          <div>Your clear value: {(bosses[bossName][key].value * bosses[bossName][key].clears)*reboot}</div>
        </section>
        
      ))}
      
    </div>
  )
}
export default BossSelection