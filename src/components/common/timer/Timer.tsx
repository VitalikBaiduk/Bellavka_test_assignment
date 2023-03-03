import { useEffect, useState } from "react";
import { StyledText } from "../../../styles/globalStyles";

type TimeProps = {
  date: Date;
};

export const Timer = ({ date }: TimeProps) => {
  const incomingDate = date.getTime();
  const currentDate = new Date().getTime();
  const validDate =
    incomingDate < currentDate ? new Date(incomingDate + currentDate) : date;

  const [finishTime] = useState(validDate.getTime());
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const diff = (finishTime - Number(new Date())) / 1000;
    if (diff < 0) return;
    setDiff([
      Math.floor(diff / 86400),
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ]);
  }, [tick, finishTime]);

  useEffect(() => {
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick]);

  return (
    <StyledText fontSize="12px" margin="0 0 0 5px">{`${diffDays} : ${diffH
      .toString()
      .padStart(2, "0")} : ${diffM.toString().padStart(2, "0")} : ${diffS
      .toString()
      .padStart(2, "0")}`}</StyledText>
  );
};
