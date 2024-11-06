import axios from "axios";
import React, { useEffect, useState } from "react";
import AddAndEditModal from "../Modals/AddandEditModal";
import Table from "../components/tabel";

 export default function User(){
    const [openModal, setOpenModal] = useState(false);
    const [allUser, setAllUser] = useState([]);

    useEffect(() => {
        getAllUserAPI();
    }, []);

    const getAllUserAPI = async()=>{
        try {
            const response = await axios.get(`http://localhost:5000/allUsers`);
            // console.log(response.data)
            console.log(response.data.dbResponse,'user response')
            setAllUser(response.data.dbResponse)
        } catch (error) {
            console.log(error);
        }
    }



    const [allTabelHead, setallTabelHead] = useState([{
        name: 'User Nmae'
    },
    {
        name: 'level'
    },
    ]);


    const handeleModal = () => {
        setOpenModal(!openModal)
        console.log()
    }

    return(
        <>
        <div className="sm:ml-64">
        <h1 >User Page</h1>
        </div>
        <div>
            <Table tableHeading={'User Table'} openEdit={handeleModal} tabelHeadings={allTabelHead} tabelBody={allUser}/>
        </div>
        {openModal && <AddAndEditModal closeModal={handeleModal} titleLable={'Edit User'}/>}
        </>
    )
 }