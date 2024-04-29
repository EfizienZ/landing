import { useState, useEffect } from 'react';
import traditionalLogo from '../images/traditional.png';

export default function Percentage() {
  const [number, setNumber] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let interval;

    if (hover) {
      interval = setInterval(() => {
        setNumber((prevNumber) => {
          if (prevNumber < 86) {
            return prevNumber + 1;
          } else {
            clearInterval(interval);
            return prevNumber;
          }
        });
      }, 20);
    } else {
      setNumber(0);
    }

    return () => clearInterval(interval);
  }, [hover]); 

  return (
    <div 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
      className='flex-row center-items ibm-plex-sans-bold before-percentage'
      style={{
        backgroundImage: `url(${traditionalLogo})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover'
      }}
    >
      {`${number}%`}
    </div>
  );
};