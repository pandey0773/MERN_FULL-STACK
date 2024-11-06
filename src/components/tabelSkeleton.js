import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function TabelSkeleton(){

    const ReapetedTD = ()=>{
        let i = 0;
        for(i=0; i<5 ; i++){
            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
        }
    }

    const Repeated = () => {
        let i=0;
        for( i=0; i<4; i++){
            return (
           
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                     <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                     <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                     <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                     <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                     <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                </tr>)
        }
        }
        
    

    return(<>
    
    <div className="relative overflow-x-auto mt-4 tabelBody">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3"><Skeleton/></th>
                            <th scope="col" className="px-6 py-3"><Skeleton/></th>
                            <th scope="col" className="px-6 py-3"><Skeleton/></th>
                            <th scope="col" className="px-6 py-3"><Skeleton/></th>
                            <th scope="col" className="px-6 py-3"><Skeleton/></th>
                        </tr>
                    </thead>
                    <tbody>
                  <Repeated/>
                  <Repeated/>
                  <Repeated/>
                  <Repeated/>
                  <Repeated/>
                    {/* <Repeated/>
                    <Repeated/>
                    <Repeated/>
                    <Repeated/>
                    <Repeated/> */}
                        
                        
                        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton  style={{height:20, width:40}}  className="sizeSkeleton"/></td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton  style={{height:20, width:40}}  className="sizeSkeleton"/></td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton  style={{height:20, width:40}}  className="sizeSkeleton"/></td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton style={{height:20, width:100}} className="sizeSkeleton"/></td>
                            <td className="px-6 py-4"><Skeleton  style={{height:20, width:40}}  className="sizeSkeleton"/></td>
                        </tr> */}
                                
                            </tbody>

                </table>
            </div >
    </>)
}