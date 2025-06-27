import React from 'react';

const Card = ({ name, link, ScholarshipType, avatar, Application_Starting, Application_Closing, amount, eligibilityCriteria, provider, instituteCreated }) => {
  return (
    <div className='h-fit sm:h-96 w-80 bg-white text-blue-900 rounded-2xl overflow-hidden shadow-lg flex flex-col border border-blue-100'>
      <div className='w-full h-48 sm:h-56 bg-blue-100 flex items-center justify-center p-2'>
        <img className='h-full w-full object-cover rounded-xl shadow' src={avatar} alt={`${name} logo`} />
      </div>
      <div className='w-full flex-1 px-4 py-3 font-[Kodchasan] flex flex-col gap-1'>
        <h2 className='text-lg font-bold mb-1 truncate'>{name}</h2>
        <div className='text-xs mb-1'><span className='font-semibold'>Application Start:</span> <span>{Application_Starting}</span></div>
        <div className='text-xs mb-1'><span className='font-semibold'>Application Close:</span> <span>{Application_Closing}</span></div>
        <div className='text-xs mb-1'><span className='font-semibold'>Amount:</span> <span>{amount}</span></div>
        <div className='flex justify-end mt-2'>
          <a href={link} target="_blank" rel="noopener noreferrer" className='text-white bg-blue-700 hover:bg-blue-900 px-4 py-1 rounded-full text-xs font-semibold transition'>Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
