import React from 'react';
import useDarkMode from 'use-dark-mode';
import { useEffect, useState } from 'react';
import SunIcon from '../../../assets/icon/sun.svg';
import MoonIcon from '../../../assets/icon/moon.svg';


function ButtonToggle() {
   const darkMode = useDarkMode(true);

   const [icon, setIcon] = useState('');

   const getIcon = () => {
      return darkMode.value ? <SunIcon /> : <MoonIcon />;
   };

   const handleClick = () => {
      darkMode.toggle();
   };

   useEffect(() => {
      setIcon(getIcon());
   }, [darkMode.value]);

   return (
      <button
         className='hover:bg-accent-2 focus:bg-accent-2 p-2 rounded-md transform scale-75'
         onClick={handleClick}
         aria-label='button toggle theme'
      >
         {icon}
      </button>
   );
}


export default ButtonToggle;
