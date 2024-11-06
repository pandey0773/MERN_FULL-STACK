import React, { useState } from "react";

export default function List() {
    const [listArr, setListArr] = useState([{
        name: 'Scorpio',
        id: 1,
        isChecked: false
    },
    {
        name: 'Bolero',
        id: 2,
        isChecked: false
    },
    {
        name: 'Honda City',
        id: 3,
        isChecked: false
    },
    {
        name: 'Thar',
        id: 4,
        isChecked: false
    }])

    const handelCheckBox = (id) => {
        console.log(id)
        const updatedArray = listArr.map((ele) => {
            if (id === ele.id) {
                return { // here returning an object 
                    ...ele,// spreading the particular element and getting all key value inside it.
                    isChecked: !ele.isChecked // here updating one of key value in that particular element
                }
            }
            return ele // if, if condition failed than return list array as it is 
        })
        console.log(updatedArray)
        setListArr(updatedArray)
    }

    const handelDelete=(id)=>{
        const updatedArray = listArr.filter((ele)=>(id !== ele.id)) // giving new arry, removing that particular element whoes id is not equal to onclick id
        setListArr(updatedArray)
    }

    return (
        <>
            <div>
                {listArr.map((e) =>  (
                        <div key={e.id}>
                            <li >
                                {<input type="checkbox" onClick={() => handelCheckBox(e.id)} />}
                                {e.name}
                                {e.isChecked && <button onClick={()=>handelDelete(e.id)}>delete</button>}
                            </li>
                        </div>
                    )
                )}
            </div>
        </>
    )
}