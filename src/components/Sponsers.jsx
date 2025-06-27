import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import CardContainer from './CardContainer'
import axios from 'axios';

const Sponsers = () => {
  const [SponserData, setSponserData] = useState([]);

  useEffect(()=>{
    axios.get('/api/v3/bank/loan')
    .then((res)=>{
      const scholarshipsArray = res.data.loans;
      if(Array.isArray(scholarshipsArray)){
        setSponserData(scholarshipsArray);
      } 
      else{
        console.error("scholarshipsArray is not an array:", scholarshipsArray);
      }
    })
  },[])
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8'>
      <div className='w-full flex justify-center text-center mb-6'>
        <h1 className='text-4xl md:text-6xl font-bold font-[Kodchasan] text-blue-900 drop-shadow-lg'>Sponsors & Loans</h1>
      </div>
      <div className="max-w-5xl mx-auto mb-8">
        <Filter/>
      </div>
      <CardContainer Data={SponserData} />
    </div>
  )
}

export default Sponsers
