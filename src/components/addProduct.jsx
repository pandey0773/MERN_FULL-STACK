import React,{useState} from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function AddProduct({getAll,closeModal}){
    const [sendProduct, setSendProduct] = useState({ productName: '', costPrice: '', sellingPrice: '' });
    const [showModal, setShowModal] = useState(false);
    // const navigate = useNavigate();

    const handelChange = (e) => {
        setSendProduct(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
        console.log(sendProduct);
    }
    const postApi = async () => {debugger
        try {
            await axios.post('http://localhost:5000/post', { sendProduct });
            console.log('data posted')
            alert('Product added')
            getAll();
            toggleModal();
            // navigate("/product");
        } catch (error) {
            console.log(error)
        }
    }
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return(
    <>
    {/* <!-- Modal toggle --> */}
    <button onClick={toggleModal} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                   + Add New Product
                </button>
        {showModal &&<div className="popup-container">
                        <div className="relative p-4 w-full max-w-md max-h-full">
                            {/* <!-- Modal content --> */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* <!-- Modal header --> */}
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Create New Product
                                    </h3>
                                    <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        
                                    </button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <form className="p-4 md:p-5">
                                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                            <input name="productName" value={sendProduct.productName} onChange={handelChange} type="text" placeholder="Product Name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cost Price</label>
                                            <input name="costPrice" value={sendProduct.costPrice} onChange={handelChange} type="number" placeholder="Cost Price" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selling Price</label>
                                            <input name="sellingPrice" value={sendProduct.sellingPrice} onChange={handelChange} type="number" placeholder="Selling Price" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                    </div>
                                    <button type="button" onClick={postApi} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                                    <button type="button" onClick={toggleModal} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        close
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>}
    </>
    )
}