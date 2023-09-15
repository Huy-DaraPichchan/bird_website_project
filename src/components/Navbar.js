import React, { useState } from "react";
import { BsFolder2 } from "react-icons/bs";
import Logo from '../assets/logo.png'

export default function Navbar() {
  const [showMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!showMenu);
  };

  return (
    <header
      className={`bg-grayCustom py-6 px-8 ${showMenu ? "open-menu" : ""} sticky top-0 z-20`}
    >
      <nav className='container mx-auto flex justify-between items-center w-full'>
        <div className='flex items-center'>
          {/* Logo */}
          <img
            src= {Logo} // Replace with your logo image URL
            alt='AI Logo'
            className='h-12 w-34 mr-4' // Adjust the size and margin as needed
          />
        </div>
        <div className="flex justify-end items-center w-full">
          {/* Search Bar */}
          <input
            type='text'
            placeholder='Search...' // Customize the placeholder text
            className='w-4/12 bg-gray-100 rounded-md px-4 py-2 mx-24 focus:outline-none focus:ring focus:border-blue-300'
          />
          <button className='text-gray-700' onClick={toggleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-6 w-6 transform transition-transform duration-300 ${
                showMenu ? "rotate-90" : ""
              }`}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Pop-up sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-grayCustom shadow-lg transform transition-transform duration-300 ${
          showMenu ? "translate-x-0 z-10" : "translate-x-full z-10"
        }`}
      >
        <div className='p-4'>
          {/* Close button */}
          <button
            className='absolute top-4 right-4 text-gray-700'
            onClick={toggleMenu}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M18 6L6 18M6 6l12 12'></path>
            </svg>
          </button>
          {/* Sidebar content */}
          <ul className='py-2'>
            <h1 className="text-xl font-bold">Category</h1>
            <li>
              <a
                href='/'
                className='my-6 block font-bold bg-blackCustom hover:opacity-70 text-white px-6 py-3 rounded-lg text-lg'
              >
                <div className='flex items-center'>
                  <BsFolder2 className='mr-3 h-6 w-6 text-birdCustom' />
                  Q&A format
                </div>
              </a>
            </li>

            <li>
              <a
                href='/'
                className='my-6 block font-bold bg-blackCustom hover:opacity-70 text-white px-6 py-3 rounded-lg text-lg'
              >
                <div className='flex items-center'>
                  <BsFolder2 className='mr-3 h-6 w-6 text-birdCustom' />
                  Coding
                </div>
              </a>
            </li>

            <li>
              <a
                href='/'
                className='my-6 block font-bold bg-blackCustom hover:opacity-70 text-white px-6 py-3 rounded-lg text-lg'
              >
                <div className='flex items-center'>
                  <BsFolder2 className='mr-3 h-6 w-6 text-birdCustom' />
                  Music
                </div>
              </a>
            </li>

            <li>
              <a
                href='/'
                className='my-6 block font-bold bg-blackCustom hover:opacity-70 text-white px-6 py-3 rounded-lg text-lg'
              >
                <div className='flex items-center'>
                  <BsFolder2 className='mr-3 h-6 w-6 text-birdCustom' />
                  Illustration
                </div>
              </a>
            </li>

            <li>
              <a
                href='/'
                className='my-6 block font-bold bg-blackCustom hover:opacity-70 text-white px-6 py-3 rounded-lg text-lg'
              >
                <div className='flex items-center'>
                  <BsFolder2 className='mr-3 h-6 w-6 text-birdCustom' />
                  Data analysis
                </div>
              </a>
            </li>

            <li>
              <a
                href='/'
                className='my-6 block font-bold bg-blackCustom hover:opacity-70 text-white px-6 py-3 rounded-lg text-lg'
              >
                <div className='flex items-center'>
                  <BsFolder2 className='mr-3 h-6 w-6 text-birdCustom' />
                  Q&A format
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
