import React from 'react'
import { useState } from 'react'
const HomeAdmin = () => {

    let mockData = [
        {
            id: 1,
            name: "John",
            lastName: "Doe",
            position: "Manager",
        }
    ]

    const handleDelete = (id) => {
        console.log(id)
    }

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [ dataMock , setDataMock] = useState(mockData);

    const handleCreateData =  (event) => {
        event.preventDefault();
        console.log('name', name);
        console.log('lastName', lastName);
        console.log('position', position);
        let bank = {
            name: name,
            lastName: lastName,
            position: position,
        }
        setDataMock([...dataMock, bank]);
        console.log('mockData', dataMock);
    };

  return (
     <div className="flex flex-col justify-center">
        
        <h1 className='text-4xl text-center'>Generation Thailand <br />
          <span>Home - User Sector</span>
        </h1>

        <div>
            <span>Create User Here</span>


            <form  className='flex gap-3 justify-center mb-4'>
                <input className='border border-black' 
                name='name'
                onChange={(ev) => setName(ev.target.value)} 
                type="text" 
                placeholder='Name'/>
                
                <input className='border border-black' 
                name='lastName ' 
                onChange={(ev) => setLastName(ev.target.value)} 
                type="text" 
                placeholder='LastName'/>

                <input className='border border-black' 
                name='position'  
                onChange={(ev) => setPosition(ev.target.value)}
                type="text" 
                placeholder='Position' />
                <button
                onClick={handleCreateData}
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </form>
        </div>

      <table className="border border-black">
        <tr className="border border-black">
          <th className="border border-black">Name</th>
          <th className="border border-black">LastName</th>
          <th className="border border-black">Position</th>
          <th className="border border-black">Action</th>
        </tr>
        {dataMock.map((data) => {
            return (
                <tr className="border border-black" key={data.id}>
                    <td className="border border-black">{data.name}</td>
                    <td className="border border-black">{data.lastName}</td>
                    <td className="border border-black">{data.position}</td>
                    <td className="border border-black">
                        <button className="border border-black" onClick={() => handleDelete(data.id)}>Delete</button>
                    </td>
                </tr>
            )
        })}
      </table>
    </div>
  );
}

export default HomeAdmin
