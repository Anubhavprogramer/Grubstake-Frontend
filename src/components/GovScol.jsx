import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import CardContainer from './CardContainer';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const GovScol = () => {
  const [sponserData, setSponserData] = useState([]);

  useEffect(() => {
    axios.get(BACKEND_URL + '/api/v1/Schollerships')
      .then((res) => {
        // console.log("Response data:", res.data); // Log to check if data is received
        const scholarshipsArray = res.data.scholerships; // Access the scholarships array
        if (Array.isArray(scholarshipsArray)) {
          const filteredData = scholarshipsArray.filter(scholarship => scholarship.isGovernment === true);
          setSponserData(filteredData);
          // console.log("Filtered data:", filteredData); // Log filtered data
        } else {
          console.error("scholarshipsArray is not an array:", scholarshipsArray);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8'>
      <div className='w-full flex justify-center text-center mb-6'>
        <h1 className='text-4xl md:text-6xl font-bold font-[Kodchasan] text-blue-900 drop-shadow-lg'>Government Scholarships</h1>
      </div>
      <div className="max-w-5xl mx-auto mb-8">
        <Filter />
      </div>
      <CardContainer Data={sponserData} />
    </div>
  );
};

export default GovScol;
