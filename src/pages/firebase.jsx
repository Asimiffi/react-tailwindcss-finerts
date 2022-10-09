import { Collection } from 'mongoose';
import React,{useState,useEffect} from 'react';
import { db } from '../firebase-config';
import { collection,getDocs } from 'firebase/firestore';

const Firebases = () => {
    const [person, setperson] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const usersCollectionRef = Collection(db, "user")

    useEffect(() => {
    
        const getUsers = async()=>{
            await getDocs(usersCollectionRef)
        }
      
    }, [])
    

  return (
    <div>
        <div className='text-center pb-16'>
            <h2 className='text-3xl my-10'>Enter Your Information</h2>
        <input
        type="text"
        className='border-black border-2 mb-8'
        placeholder="Name of Person"
        onChange={(e) => setperson(e.target.value)}
        required
      />
      <br />
      <input
        type="number"
        placeholder="Contact"
        className='border-black border-2 mb-8'
        onChange={(e) => setcontact(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        className='border-black border-2 mb-8'
        onChange={(e) => setemail(e.target.value)}
      />
      <br />
      <button className='border-2 border-black mb-4 px-4 py-2'>Add</button>
      </div>
    </div>
  )
}

export default Firebases
