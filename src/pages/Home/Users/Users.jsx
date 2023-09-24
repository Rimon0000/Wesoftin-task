import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    return (
        <div className='w-full'>
          <div className='text-center my-8'>
            <h2 className='text-3xl uppercase py-4'>Total Users: {users.length}</h2>
          </div>
          <div className='overflow-x-auto'>
            <table className='table table-zebra w-full font-semibold text-base'>
              {/* head */}
              <thead className="font-semibold text-xl">
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>More Info</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <th>{index + 1}</th>
                    <td>
                      <img className="w-24 rounded-xl" src={user.photo} alt='' />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><button className="btn btn-outline btn-primary">Details</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
};

export default Users;