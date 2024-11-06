import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import CheckboxWithLabel from "./checkbox/CheckboxWithLabel";
import Dropdown from "./dropdown";
import './welcome.css';
import axios from "axios";

export default function WelcomePage() {
    useEffect(() => {

        // getAllCountries()

    }, []);
    const currentUser = useSelector((store) => store.showUserNameSlice)
    const [isOpen, setIsOpen] = useState(false);
    const [isEnableBtn, setIsEnableBtn] = useState(true);
    const [country, setCountry] = useState([]);
    const [inputValue, setInputValue] = useState({ name: '', countryDropDow: '', stateDropDow: '', areaDropDown: '' })

    const handelModal = () => {
        if (!isOpen) {
            getAllCountries();
        }
        setIsOpen(!isOpen)
    }
    const btnclass = (inputValue?.name?.length === 0) ? 'text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center' :
        'text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'

    const enableBtn = () => {
        setIsEnableBtn(false)
    }

    const getAllCountries = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all?fields=name')
            console.log(response.data.map((el) => el.name.common))
            // console.log(response.data)
            setCountry(response.data.map(({ name }) => name.common))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="sm:ml-64">
                {console.log(currentUser, 'user data showing in welcome page')}
                <h1 className="font-bold ...">Welcome : {currentUser?.userAllData?.data?.data?.userName}</h1>
                <CheckboxWithLabel />
                <div>


                    {/* <!-- Modal toggle --> */}
                    <button onClick={handelModal} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Toggle modal
                    </button>


                    {/* <!-- Main modal --> */}
                    {
                        isOpen &&
                        <div id="crud-modal" tabindex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="m-auto relative p-4 w-full max-w-md max-h-full">
                                {/* <!-- Modal content --> */}
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    {/* <!-- Modal header --> */}
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Create New Product
                                        </h3>
                                        <button onClick={handelModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>

                                        </button>
                                    </div>
                                    {/* <!-- Modal body --> */}
                                    <form className="p-4 md:p-5">
                                        <div className="grid gap-4 mb-4 grid-cols-1">
                                            <div className="col-span-2">
                                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                <input type="text" value={inputValue.name} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                            </div>


                                            <div className="phoneGrid">
                                                <div className="" >
                                                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                                                    <input type="number" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="+91" required="" />
                                                </div>



                                                <div className="">
                                                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile no.</label>
                                                    <input type="number" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="9123456789" required="" />
                                                </div>
                                            </div>



                                            <div className="col-span-2 ">
                                                <Dropdown options={country} placeholder={'select country'} lable={'Country'} />
                                            </div>


                                            {<div className="col-span-2 ">
                                                <Dropdown options={country} placeholder={'select country'} lable={'state'} />
                                            </div>}


                                            {<div className="col-span-2 ">
                                                <Dropdown options={country} placeholder={'select country'} lable={'area'} />
                                            </div>}


                                        </div>
                                        <button disabled={isEnableBtn} type="button" className={btnclass}>
                                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                            Add new product.
                                        </button>
                                        {/* <button type="button">Add new product.</button> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}