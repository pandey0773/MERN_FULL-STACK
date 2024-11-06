import React from "react";

export default function Dropdown({ options, placeholder, select,lable }) {
  return (
    <>
      {/* <select onChange={select} defaultValue={placeholder} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <option disabled>{placeholder}</option>
        {options.map((e, index) => (
          <option className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" key={index}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
              <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{e}</a>
              </li>
            </ul>

          </option>
        ))}
      </select> */}
      <div className="col-span-2 ">
        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lable}</label>
        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
        <option disabled>{placeholder}</option>
        {options.map((e, index) => (
          <option className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" key={index}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
              <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{e}</a>
              </li>
            </ul>

          </option>
        ))}
        </select>
      </div>
    </>
  );
}