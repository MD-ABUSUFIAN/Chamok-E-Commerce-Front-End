import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import ProductPath from './ProductPath/ProductPath';

const OfferBanner = () => {

    const [products,setProducts]=useState([])
    const offers=[
        {
            id:1,
            imageUrl:"https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D114940&q=best&v=1&m=588&webp=1"
        },
        {
            id:2,
            imageUrl:"https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D115807&q=best&v=1&m=588&webp=1"
        }
    ];

    useEffect(()=>{
        fetch('./productsPath.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data) 
        })
        .catch(error=>console.log(error))
    },[])

  
    return (
        <div className=' md:mx-10 mx-2' >
            <div className='my-2 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 '>
               {
                offers.map(offer=> <div key={offer?.id}>

                    <img className='w-full object-cover overflow-hidden rounded-tl-xl rounded-xl' src={offer?.imageUrl} alt="" />

                </div>)
               }

            </div>

            {/* Our Product Categories Sesction */}
            <h1 className='text-2xl text-center md:py-5 py-2'>Our Product Categories</h1>

            <div className=' grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-y-2'>
          {
            products.map(product=><ProductPath key={product?.id} product={product}></ProductPath>)
          }
            </div>
            
        </div>
    );
};

export default OfferBanner;