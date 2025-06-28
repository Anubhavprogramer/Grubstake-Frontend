import React, { useState } from 'react';

const Filter = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Filter Button at top-right */}
      <div className="fixed top-6 right-8 z-40">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-full px-6 py-2 shadow-lg transition-all text-lg font-[Kodchasan] focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Filter
        </button>
      </div>
      {/* Modal/Popover for Filter Form */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xs relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-blue-700 hover:text-blue-900 text-xl font-bold focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-blue-900 mb-4 text-center font-[Kodchasan]">Filter Loans</h2>
            <form action="" className='flex flex-col gap-2'>
              <input className='outline-none px-3 py-1.5 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm' type="number" placeholder='12th marks ' name='12th marks'/>
              <input className='outline-none px-3 py-1.5 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm' type="number" placeholder='10th marks ' name='10th marks'/>
              <input className='outline-none px-3 py-1.5 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm' type="number" placeholder='CGPA' name='CGPA'/>
              <input className='outline-none px-3 py-1.5 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm' type="text" placeholder='Category' name='Category'/>
              <input className='outline-none px-3 py-1.5 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm' type="number" placeholder='Income' name='Income'/>
              <input className='outline-none px-3 py-1.5 rounded-lg text-zinc-950 bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm' type="text" placeholder='State' name='State'/>
              <input className='w-20 cursor-pointer px-3 py-1.5 rounded-lg text-white bg-blue-700 hover:bg-blue-900 transition font-semibold text-sm self-end' type="submit" value="Find" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
