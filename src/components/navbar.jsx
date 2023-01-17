import React from 'react'
import logo from '../../public/logo.svg';
function navbar() {
  return (
    <div>
      
          <ul className="flex  justify-between   ">
              <li className='flex items-center  '> 
                <img src="logo.svg" className='w-10 h-12 m-1' alt="logo"/>
                  <a className='text-2xl ' href='#'>
                      <span className='text-teal-50'>medi</span><span className='text-teal-400'>Partner</span></a>
              </li>
              
              <ul className=" flex flex-row-reverse  h-10 items-end text-xl font-medium ">
                  <li className="mr-6">
                      <a className="text-gray-400 cursor-not-allowed" href="#">mediShop</a>
                  </li>
                  <li className="mr-6">
                      <a className="text-teal-50 hover:text-teal-400" href="#">First-Aid</a>
                  </li>
                  <li className="mr-6">
                      <a className="text-teal-50 hover:text-teal-400" href="#">Hospital</a>
                  </li>
                  <li className="mr-6">
                      <a className="text-teal-50 hover:text-teal-400" href="#">Home</a>
                  </li>
              </ul>
        </ul>

          {/* */}
    </div>
  )
}

export default navbar