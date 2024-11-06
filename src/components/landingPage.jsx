import React, { useState } from "react";
import Dropdown from "./dropdown";
import List from "./list";
function LandingPage() {
    const countries = [
        {
            name: "India",
            value: "IN",
            cities: ["delhi", "mumbai", "kolkata"],
        },

        {
            name: "Australia",
            value: "AS",
            cities: ["sanburge", "canbara", "holycity"],
        },

        {
            name: "America",
            value: "US",
            cities: ["NewYork", "colombia", "washington DC"],
        },
    ];
    // countries.forEach(({ cities }) => { // watch syntax of for each ---> "{ cities }" fetching the array cities present in object
    //   console.log(cities);
    //   // Do something with the cities
    // });

    const [allCities, setAllCities] = useState([]);
    const [isCountrySelected, setisCountrySelected] = useState(false);

    const countryNames = countries.map((country) => country.name); // destructuring name from countries array

    const handelChange = (e) => {
        const Country = e.target.value;
        countries.forEach((e) => (e.name === Country?setAllCities(e.cities):''));
        setisCountrySelected(true);
    };

    return (
        <div>
            <Dropdown
                options={countryNames}
                placeholder={"select contry"}
                select={handelChange}
            />
            <div>
                {isCountrySelected && (
                    <div>
                        <Dropdown options={allCities} placeholder={"select city"} />
                    </div>
                )}
            </div>
            <div><List/></div>
        </div>
    );
}

export default LandingPage;