import { useEffect } from "react";
const Values = ({mapleTour, maxClears, setMaxClears,bosses, reboot, total, setTotal, ursus, daysDifference}) => {
  useEffect(() => {
    let calculatedTotal = 0;
    let clearsCount = 0;
    Object.entries(bosses).forEach(([bossName, difficulties]) => {
      Object.entries(difficulties).forEach(([difficulty, data]) => {
        calculatedTotal += data.clears * data.value *reboot;
        clearsCount+= data.clears
      });
    });
    calculatedTotal+=ursus.clears*ursus.level*ursus.mesosPerLevel*reboot*2*daysDifference
    calculatedTotal+=mapleTour.clears*mapleTour.value*reboot
    setTotal(calculatedTotal);
    setMaxClears(clearsCount)

  }, [bosses, ursus, mapleTour, reboot]);

  return (
    <div>
      <div>You make {total.toLocaleString()} mesos</div>
      <div>
        {maxClears > 180 ? `You are selling ${Math.abs(180-maxClears)}too many crystals`: `You are selling ${maxClears} crystals` } 

      </div>
    </div>
  );
}

export default Values