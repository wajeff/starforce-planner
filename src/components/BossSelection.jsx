const BossSelection = ({bossName, bosses, updateClears, weeklyClearLimit}) => {
  return (
    <div>
      <h2>{bossName}</h2>
      {Object.keys(bosses[bossName]).map((key) => (
        <section key={key}>
          <label htmlFor={`${bossName}-${key}-select`}>{key}</label>
          <select
            id={`${bossName}-${key}-select`}
            value={bosses[bossName][key].clears}
            onChange={(e) => updateClears(bossName, key, parseInt(e.target.value))}
            >
              {weeklyClearLimit.map((number) => (
                <option key={number} value={number}>{number}</option>
              ))}
          </select>
          <div>Crystal Value: {bosses[bossName][key].value}</div>
          <div>Your clear value: {bosses[bossName][key].value * bosses[bossName][key].clears}</div>
        </section>
        
      ))}
      
    </div>
  )
}
export default BossSelection