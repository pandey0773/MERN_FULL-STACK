import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SignIn from "./SignIn";
import SideMenu from "./sideMenu";

const LayOut = () => {
    const [isUser, setUser] = useState(false);

    useEffect(() => {
        checkIsValidUser();

    }, []);

    const checkIsValidUser = () => {
        if (isUser) {
            setUser(true)
        }
        else {
            setUser(false)
        }
    }

    const allowUser=()=>{
        setUser(!isUser);   // Note : Due to state change cmp got rerender 
        // navigator()
    }

    return (
        // <div>
        //     {/* The Layout cmp include the sideMenu and an outlet component.  */}
        //     {/* The Outlet component acts as a plcaleholder that will render the appropriate child route's componet(product, welcomepage etc)*/}
        //     {/* this way sidemenu will display on all routes */}
        //     {/* <SideMenu/>
        //     <Outlet/> */}
        //     {/* <div className="sm:ml-64"><h1>Welcome to ShopNow</h1></div> */}
        // </div>

        <>
            <div>

                {isUser ? <div>
                    <SideMenu logOut={allowUser}/>
                    <Outlet />
                </div> : <SignIn onSignIn={allowUser}/>}

            </div>
        </>
    )
}

export default LayOut