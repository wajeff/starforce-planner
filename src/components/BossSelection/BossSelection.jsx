import styles from './BossSelection.module.css'
const BossSelection = ({bossName, bosses, updateClears, weeklyClearLimit, reboot, setBosses}) => {
  const bossTotal = Object.values(bosses[bossName]).reduce((sum, { value, clears }) => {
    return sum + (value * clears) * reboot;
  }, 0);

  return (
    <div className={styles.bossSelection__container}>
      
      <section>
        <img 
        src={`/bosses/${bossName.toLowerCase()}.png`}
        ></img>
      </section>
      
      {Object.keys(bosses[bossName]).map((key) => (
        <section 
          key={key}
        >
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
          
        </section>
      ))}
      <section> 
        
        {bossTotal}

      </section>
     
       
    </div>
  )
}
export default BossSelection