import React, { useEffect, useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import TabelSkeleton from "./tabelSkeleton";




export default function Table({tableHeading,openEdit,tabelBody,tabelHeadings}) {

    
    

    const [skeletonFlag, setSkeletonFlag] = useState(true);
    // const [openModal, setOpenModal] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setSkeletonFlag(false);
        }, 3000)

    }, []);



    // const handeleModal = (id) => {
    //     setOpenModal(!openModal)
    //     console.log(id)
    // }


    return (
        <><div className="sm:ml-64">
            {<h2>{tableHeading}</h2>}
            {(skeletonFlag && <TabelSkeleton />) || (<div className="relative overflow-x-auto mt-4 tabelBody">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {tabelHeadings.map((e) => (<th scope="col" className="px-6 py-3">{e.name}</th>))}
                        </tr>
                    </thead>
                    {tabelBody.map((e) => {
                        return (
                            <tbody key={e._id}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">{e?.userName}</td>
                                    <td className="px-6 py-4">{e?.level}</td>
                                    <td className="px-6 py-4">{e?.sellingPrice}</td>
                                    {/* <td className="px-6 py-4">{<button onClick={() => deleteProductApi(e._id)}>del</button>}</td> */}
                                    <td className="px-6 py-4">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                                        </svg></td>
                                    <td className="px-6 py-4">
                                        <svg onClick={() => openEdit(e._id)} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div >)}
        </div></>
    )
}