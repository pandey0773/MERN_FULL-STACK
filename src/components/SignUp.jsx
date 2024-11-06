import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/redux/allUserDataSclice";
import { useSelector } from 'react-redux'
import axios from "axios";

export default function SignUp(){
    const dispatch = useDispatch();
    const[formData, setFormData] = useState({userName:'', password:''})

    const getData = useSelector((state) => state.userSlice)
    console.log(getData.userData,'data from redux store in SignIn cmp ');
    // console.log(formData);
    const handelChange=(e)=>{
        
        setFormData( prevState =>({
            ...prevState,
            [e.target.name] : e.target.value // note yahan ye prevState (fromData) ka userName  and event jid button se fire ho raha uska name dono ek sath pakad raha. so, it must have same name in both position
        })
        )
        console.log(FormData)
    }

    const handelSubmit =()=>{
        dispatch(registerUser(formData))
    }

    const signUpApi = async()=>{
        try {
            const response = await axios.post('http://localhost:5000/signup',{formData})
            console.log(response)
            if (response.status === "REGISTERED") {
                alert('User Registerd')
            }
            else{
                console.error('rest API failed')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <p href="//" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          ShopNow    
      </p>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={formData.userName} onChange={handelChange} type="email" name="userName" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={formData.password} onChange={handelChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  {/* <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div> */}
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <p class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</p></label>
                      </div>
                  </div>
                  <button onClick={signUpApi} type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Create an Account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <p href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500"> <Link to='/'> Login here </Link> </p>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
        </>
    )
}