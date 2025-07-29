import { useEffect } from "react";
const Values = ({maxClears,setMaxClears, totalValue, setTotalValue,bosses, reboot, total, setTotal, ursus}) => {
  useEffect(() => {
    let calculatedTotal = 0;
    Object.entries(bosses).forEach(([bossName, difficulties]) => {
      Object.entries(difficulties).forEach(([difficulty, data]) => {
        calculatedTotal += data.clears * data.value;
      });
    });
    calculatedTotal+=ursus.clears*ursus.level*ursus.mesosPerLevel
    setTotal(calculatedTotal);
  }, [bosses, ursus]);

  return (
    <div>
      <div>You make {total.toLocaleString()} mesos</div>
    </div>
  );
}

export default Values