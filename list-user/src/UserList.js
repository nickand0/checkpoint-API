//importation react
import React,{useState,useEffect} from 'react'

//importation axios
import axios from 'axios';

const Userlist = () =>{
    const [listOfUser,setListOfUser] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUser(response.data)
            })
            .catch(error => {
                console.error('Il ya une erreur lors de récupération de donnée',error)
            })
    },[])

    return(
        <div >
            <h1 className='text-center py-4 text-5xl bg-slate-600 text-white'>User list</h1>
            <ul className='flex flex-wrap gap-7 justify-center'>
            <div className='flex justify-center w-full gap-2 bg-slate-500 text-center'>
                <p className='w-32 py-5 pl-1 border-r font-bold text-white'>Name</p>
                <p className='w-52 py-5 pl-1 border-r font-bold  text-white'>Email</p>
                <p className='w-48 py-5 pl-1 border-r font-bold  text-white'>Street</p>
                <p className='w-28 py-5 pl-1 border-r tfont-bold  text-white'>Suite</p>
                <p className='w-44 py-5 pl-1 border-r font-bold text-white'>City</p>
                <p className='w-52 py-5 pl-1 border-r font-bold text-white'>Phone Number</p>
                <p className='w-52 py-5 pl-1 border-r font-bold text-white'>Website</p>
                <p className='w-52 py-5 pl-1 border-r font-bold text-white'>Company</p>
            </div>
                {listOfUser.map(user =>(
                    <li key={user.id} className='flex justify-center rounded-md w-full gap-2 text-center '>
                        <p className='w-32 py-5 pl-1 border-r border-l'>{user.name}</p> 
                        <p className='w-52 py-5 pl-1 border-r '>{user.email}</p>
                        <p className='w-48 py-5 pl-1 border-r '>{user.address.street}</p>
                        <p className='w-28 py-5 pl-1 border-r  '>{user.address.suite}</p>
                        <p className='w-44 py-5 pl-1 border-r '>{user.address.city}</p>
                        <p className='w-52 py-5 pl-1 border-r  '>{user.phone}</p>
                        <p className='w-52 py-5 pl-1 border-r '>{user.website}</p>
                        <p className='w-52 py-5 pl-1 border-r  '>{user.company.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Userlist
