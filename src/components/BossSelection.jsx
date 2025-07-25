const BossSelection = ({bossName, bosses}) => {
  return (
    <div> 
      <div>
        <h2>{bossName}</h2>
        {Object.entries(bosses[bossName]).map(([difficulty, count])=>(
          <div key ={difficulty}>
            {difficulty}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BossSelection