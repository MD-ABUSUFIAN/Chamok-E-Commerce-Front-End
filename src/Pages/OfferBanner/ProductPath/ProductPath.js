import React from 'react';
import {Link} from 'react-router-dom'

const ProductPath = ({product}) => {
   const {icon,title,path}=product;
    return (
        <div>
             <Link to={path}>
             <div class="flex items-center rounded-lg  border p-4 hover:bg-gray-100">
                   
                   <div class="flex-1 min-w-5">
                       <p class="text-base font-medium text-center text-gray-900 truncate dark:text-white">
                           {title}
                       </p> 
                   </div>

                   <div class="flex-shrink-0">
                       <img class="w-12 h-10 rounded-full" src={icon} alt="Neil image"/>
                   </div>
               </div></Link>
        </div>
    );
};

export default ProductPath;