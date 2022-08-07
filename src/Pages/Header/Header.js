import React, { useState } from 'react';
import Login from '../Login/Login';

const Header = () => {

  const[isOpen,setIsOpen]=useState(true)
   

   
  return (
    <div>
      
      <button className='text-white relative my-10  bg-blue-700 hover:bg-blue-800 mx-5' onClick={()=>{setIsOpen(!isOpen)}}>toogle</button>
         
          {
            
      !isOpen ? <div className='bg-blue-700 w-3/4 mx-auto my-40 py-48 text-center text-4xl text-white'>
         <h1>Nasrin I LOVE YOU</h1></div>:<Login/>
      
      
     }
          
    
    
    </div>
  );
};

export default Header;
