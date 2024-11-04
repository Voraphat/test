import { useState } from "react";
import React from "react";



const Homeuser = () => {

const mockData = [
    {
        id: 1,
        name: "John",
        lastName: "Doe",
        position: "Manager",
        isAdmin: true
    }
]

  return (
    <div className="flex flex-col justify-center">
        
        <h1 className='text-4xl text-center'>Generation Thailand <br />
          <span>Home - User Sector</span>
        </h1>

      <table className="border border-black">
        <tr className="border border-black">
          <th className="border border-black">Name</th>
          <th className="border border-black">LastName</th>
          <th className="border border-black">Position</th>
        </tr>
        {mockData.map((data) => {
            return (
                <tr className="border border-black" key={data.id}>
                    <td className="border border-black">{data.name}</td>
                    <td className="border border-black">{data.lastName}</td>
                    <td className="border border-black">{data.position}</td>
                </tr>
            )
        })}
      </table>
    </div>
  );
};

export default Homeuser;
