const BossSelection = ({bossName, bosses, updateClears, weeklyClearLimit}) => {
  return (
    <div> 
      <div>

        <h2>{bossName}</h2>
          {Object.keys(bosses[bossName]).map(key=>
          <section key={key}>
            <label htmlFor="clear-select">{key}</label>
            <select name ='bosses' id ='clear-select'>
              {weeklyClearLimit.map(number=>
              <option key={number} value="{number}">{number}</option>
            )}
            </select>
            
          </section>
          

        )}
        
        
      </div>
    </div>
  )
}

export default BossSelection