import React from  'react'

const Footer = () => {
  return (
    <footer className='w-full bg-blue-900 text-white pt-8 pb-4 mt-8'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4'>
        <div className='mb-6 md:mb-0'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>Grubstake</h1>
          <p className='text-sm mb-2'>Empowering Your Financial Future</p>
          <div className='flex space-x-4 mt-2'>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-300'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0016.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z'/></svg>
            </a>
            <a href='https://facebook.com/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-300'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M22.675 0h-21.35C.597 0 0 .592 0 1.326v21.348C0 23.408.597 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.408 24 22.674V1.326C24 .592 23.403 0 22.675 0'/></svg>
            </a>
            <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-300'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z'/></svg>
            </a>
          </div>
        </div>
        <div className='mb-6 md:mb-0'>
          <h2 className='text-xl font-semibold mb-2'>Quick Links</h2>
          <ul className='text-sm space-y-1'>
            <li><a href='/' className='hover:underline'>Home</a></li>
            <li><a href='/#how-it-works' className='hover:underline'>How it Works</a></li>
            <li><a href='/#featured' className='hover:underline'>Featured</a></li>
            <li><a href='/login' className='hover:underline'>Login</a></li>
            <li><a href='/SignUp' className='hover:underline'>Sign Up</a></li>
          </ul>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-2'>Our Team</h2>
          <ul className='text-sm space-y-1'>
            <li className='hover:underline'>Dhruvi Tyagi</li>
            <li className='hover:underline'>Alka Singh</li>
            <li className='hover:underline'>Anshika Pandey</li>
            <li className='hover:underline'>Piyush Kumar Jaiswal</li>
            <li className='hover:underline'>Avanish Shukla</li>
            <li className='hover:underline'>Anubhav Dubey</li>
          </ul>
        </div>
      </div>
      <div className='text-center text-xs text-blue-200 mt-6'>
        &copy; {new Date().getFullYear()} Grubstake. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
