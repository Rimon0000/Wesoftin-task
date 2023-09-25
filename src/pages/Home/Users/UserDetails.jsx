import { Link, useLoaderData, useParams } from "react-router-dom";

const UserDetails = () => {
    const users = useLoaderData()
    const userId = useParams()

    const singleUser = users.find(user => user.id === parseInt(userId.id)) 
    const {photo, name, email, username, address, phone, company, expertise} = singleUser

    return (
        <div className='grid lg:grid-cols-2 gap-5 my-10 p-10 bg-base-100 shadow-xl'>
          <div className="pt-14">
          <figure><img src={photo} alt="Shoes" className='rounded-lg' /></figure>
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl">Name: {name}</h2>
            <div className=''>
            <p className='py-1 font-bold'>User Name: <span className='font-semibold pl-1'>{username}</span></p>
            <p className='py-1 font-bold'>Expertise: <span className='font-semibold pl-1'>{expertise}</span></p>
            <p className='py-1 font-bold'>Email: <span className='font-semibold pl-1'>{email}</span></p>
            <p className='py-1 font-bold'>Phone: <span className='font-semibold pl-1'>{phone}</span></p>
            <p className='py-1 font-bold'>Company: <span className='font-semibold pl-1'>{company.name}</span></p>
            <p className='py-1 font-bold'>Company CatchPhrase: <span className='font-semibold pl-1'>{company.catchPhrase}</span></p>
            <p className='py-1 font-bold'>Company BS: <span className='font-semibold pl-1'>{company.bs}</span></p>
            <p className='py-1 font-bold'>Address: <span className='font-semibold pl-1'>{address.street} || {address.suite} || {address.city} || {address.zipcode}</span></p>
            </div>
          </div>
          <Link className="text-center" to={'/users'}>
                <button className="btn btn-outline text-center">Back To Users</button>
          </Link>
        </div>
    );
};

export default UserDetails;