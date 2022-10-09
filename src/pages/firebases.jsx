import { Collection } from 'mongoose';
import React,{useState,useEffect} from 'react';
import { db } from '../firebase-config';
import { collection,getDocs } from 'firebase/firestore';

const Firebases = () => {
    const [person, setperson] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [users, setusers] = useState([]);
    const usersCollectionRef = collection(db, "user")
    
    useEffect  (() => {
       
      async function getUsers() {
           const  data = await getDocs(usersCollectionRef)
        
          //  setusers(...data.docs.map((doc)=>({...doc.data(), id:doc.id})))
           for(let i=0;i<data.docs.length;i++)
          {
            users.push(data.docs[i]._document.data.value.mapValue.fields)
          }
          console.log(users[0].contact)
        }
        
        getUsers()
       
        
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
