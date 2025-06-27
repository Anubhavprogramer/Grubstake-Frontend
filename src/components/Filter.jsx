import React from 'react'

const Filter = () => {
  return (
    <div className='h-fit w-full bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden'>
      <div className='filter h-full w-full p-6 md:w-2/3 flex flex-col justify-center'>
        <form action="" className='flex flex-col flex-wrap gap-3'>
            <input className='outline-none px-4 py-2 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400' type="number" placeholder='12th marks ' name='12th marks'/>
            <input className='outline-none px-4 py-2 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400' type="number" placeholder='10th marks ' name='10th marks'/>
            <input className='outline-none px-4 py-2 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400' type="number" placeholder='CGPA' name='CGPA'/>
            <input className='outline-none px-4 py-2 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400' type="text" placeholder='Category' name='Category'/>
            <input className='outline-none px-4 py-2 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400' type="number" placeholder='Income' name='Income'/>
            <input className='outline-none px-4 py-2 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400' type="text" placeholder='State' name='State'/>
            <input className='w-28 cursor-pointer px-4 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-900 transition font-semibold' type="submit" value="Find" />
        </form>
      </div>
      <div className='Government flex flex-col w-full md:w-1/3 text-center p-6 bg-blue-900'>
        <h1 className='text-2xl md:text-3xl text-white font-bold font-[Kodchasan] mb-4'>Important Links</h1>
        <div className='w-full text-white font-[Kodchasan] flex flex-col text-start gap-2'>
            <span><a href="#" className="hover:underline">UP Scholarships</a></span>
            <span><a href="#" className="hover:underline">Central Scholarships</a></span>
        </div>
      </div>
    </div>
  )
}

export default Filter
