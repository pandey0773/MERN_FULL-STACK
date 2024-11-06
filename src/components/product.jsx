import React, { useEffect, useState } from "react";
// import Skeleton from 'react-loading-skeleton'
import axios from "axios";
import 'react-loading-skeleton/dist/skeleton.css';
import AddAndEditModal from "../Modals/AddandEditModal";
import AddProduct from "./addProduct";
import TabelSkeleton from "./tabelSkeleton";
import { useSelector } from 'react-redux';



export default function Product() {

    const [allProduct, setAllProduct] = useState([]);
    const [Search, setSearch] = useState([]);
    const [skeletonFlag, setSkeletonFlag] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [editOptionID, setEditOptionID] = useState('');
    const currentUser = useSelector((store)=>store.showUserNameSlice)

    useEffect(() => {
        setTimeout(() => {
            getAllProduct()
            setSkeletonFlag(false);
        }, 3000)

    }, []);
    
    const handelSearch = (e) => {
        setSearch(e.target.value)
    }

    const handelSearchFc = (event) => {
        event.preventDefault()
        getAllProduct()
    }

    const getAllProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/learning?product=${Search}`)
            console.log('data fetched successfully')
            setAllProduct(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProductApi = async (id) => {
        try {
            console.log(id)
            await axios.delete(`http://localhost:5000/delete/${id}`)
            getAllProduct()
            alert('deleted successfully')
        } catch (error) {
            console.log(error)
        }
    }
    const handeleEditModal=(id)=>{
        setOpenEditModal(!openEditModal)
        console.log(id)
        setEditOptionID(id)
    }
    const handeleAddModal = ()=>{
        setOpenModal(!openModal)
    }
    const editProductAPIcall=async(data)=>{
        try {
            await axios.put(`http://localhost:5000/edit/${editOptionID}`,{data});
            getAllProduct();
            alert('product updated successfully');
            setOpenEditModal(false);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <><div className="sm:ml-64">

            <form className="tabel">
                {/* <button onClick={getAllProduct} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">get all data</button> */}

                <div className="relative searchBox">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> */}
                        </svg>
                    </div>
                    <input type="search" id="default-search" value={Search} onChange={handelSearch} placeholder="search product" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <button onClick={handelSearchFc} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search Product</button>
                </div>
            </form>
                {<div className="addProduct"><AddProduct closeModal={handeleAddModal} getAll={getAllProduct}/></div>}
               { openEditModal && <div><AddAndEditModal titleLable={'Edit Product'} fetchData={editProductAPIcall} closeModal={handeleEditModal}/></div>}

            {(skeletonFlag && <TabelSkeleton />) || (<div className="relative overflow-x-auto mt-4 tabelBody">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Product Name</th>
                            <th scope="col" className="px-6 py-3">Cost Price</th>
                            <th scope="col" className="px-6 py-3">Selling Price</th>
                            <th scope="col" className="px-6 py-3">delete</th>
                            <th scope="col" className="px-6 py-3">Edit</th>
                        </tr>
                    </thead>
                    {allProduct.map((e) => {
                        return (
                            <tbody key={e._id}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">{e.productName}</td>
                                    <td className="px-6 py-4">{e.costPrice}</td>
                                    <td className="px-6 py-4">{e.sellingPrice}</td>
                                    {/* <td className="px-6 py-4">{<button onClick={() => deleteProductApi(e._id)}>del</button>}</td> */}
                                    {currentUser?.userAllData?.data?.data?.level === 1  && <td className="px-6 py-4">
                                        <svg onClick={() => deleteProductApi(e._id)} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                                        </svg></td>}
                                    {currentUser?.userAllData?.data?.data?.level === 1  && <td className="px-6 py-4">
                                        <svg onClick={()=>handeleEditModal(e._id)} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                        </svg>
                                    </td>}
                                </tr>

                            </tbody>
                        )
                    })}
                </table>
            </div >)}
            </div></>
    )
}