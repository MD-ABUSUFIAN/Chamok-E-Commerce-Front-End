import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
    const{emailRegister,user}=useFirebase();
    const { handleSubmit,register, reset } = useForm({
        defaultValues: {
          checkbox: false,
        }
      });
    const onSubmit = data =>{
        if(data?.password===data?.confirmPassword){
            emailRegister(data)
            swal("Registration SuccessFully!", "WellCome New User!", "success");
    
        }
        
      
       
  
        // reset()
    };
    return (
        <div className='bg-blue-100 py-5 w-full  '>


            <div className='md:w-1/2 md:mx-auto mx-3 mt-10 shadow-xl p-10 bg-white shadow-black-500 rounded-2xl hover:shadow-indigo-500/40'>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" >
                   
                    <h4 className=' md:mb-4 md:text-4xl text-base bolder text-center text-blue-900 dark:text-white font-bold'>Register in to our e-commerce</h4>
                       <div>
                           <label  className="block md:mb-1 md:text-base text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                           <input  type="name" {...register("displayName",{ required: true, maxLength: 20 })}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " placeholder="Write your Name" required/>
                       </div>
                       <div>
                           <label  className="block md:mb-1 md:text-base text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                           <input  type="email" {...register("email")}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " placeholder="username@gmail.com" required/>
                       </div>

                       <div>
                           <label  className="block md:mb-1 text-base font-medium text-gray-900 dark:text-gray-300">Your Phone Number</label>
                           <input  type="number" {...register("phoneNumber")}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " placeholder="Write Your Phone Number +880123456789" required/>
                       </div>

                       <div>
                           <label  className="block md:mb-1 md:text-base text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                           <input type="password" {...register("password")} id="password" placeholder="Write Your Password••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " required/>
                       </div>
                       <div>
                           <label  className="block md:mb-1 md:text-base text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                           <input type="password" {...register("confirmPassword")} id="confirmPassword" placeholder="Write Your Confirm Password••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " required/>
                       </div>

                       <div>
                           <label  className="block md:mb-1 md:text-base text-sm font-medium text-gray-900 dark:text-gray-300">Select Your Gender</label>
                           <select {...register("gender")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
                                <option className='text-base font-bold text-blue-600' value="male">Male</option>
                                <option className='text-base font-semibold text-green-800' value="female">Female</option>
                                <option className='text-base font-semibold text-red-800'  value="other">Other</option>
                          </select>
                       </div>

                     
                      
                       <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-xl text-sm md:px-5 px-2 md:py-2.5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mb-4">Register to your account</button>
                       <div className="md:text-lg text-sm font-medium text-gray-500 dark:text-gray-300">
                          Already registered? <Link to="/login" className="text-blue-900 md:text-lg text-sm font-bold hover:underline dark:text-blue-500 italic hover:not-italic">Please Login</Link>
                       </div>
                   </form>
              </div>

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input type="name" {...register("displayName",{ required: true, maxLength: 20 })} placeholder="write your Name" />
                <br />
                <input type="email" {...register("email")} placeholder="write your Email" />
                <br />
                <input type="number" {...register("number")} placeholder="write your phone Number" />
                <br />
                <input type="password" {...register("password")} placeholder="write your Password" />
                <br />
                <select {...register("gender",{ min: 18, max: 99 })}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                    </select>
                    <br />
                <input type="submit" value="Register" />
            </form>
            <br />
            <span>Already Register? plz <Link to="/login">Login</Link></span> */}
        </div>
    );
};

export default Register;