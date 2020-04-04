/* libs */
import { useState, useEffect } from 'react';

declare module UseExampleModule {
  export type Props = {
    time: number;
  };
}

const useExample = (props: UseExampleModule.Props) => {
  let [time, setTime] = useState(props.time);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(++time);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return time;
};

export default useExample;
