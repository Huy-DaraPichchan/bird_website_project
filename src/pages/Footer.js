import React from "react";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className='bg-gray-200 py-4'>
      <div className='container mx-auto flex justify-between items-center flex-col py-5'>
        <div className='w-full flex items-center justify-between py-3'>
          <div>
            <img src={Logo} alt='Logo' className='h-12 w-34' />
          </div>
          <div>
            <button className='text-black-500 hover:underline mr-4'>
              Terms of Service
            </button>
            <button className='text-black-500 hover:underline'>
              Privacy Policy
            </button>
          </div>
        </div>
        <span className='block w-full h-px bg-gray-500 my-4' />
        <div className='w-full py-3'>
          Copyright &copy; Nyle Inc.
          <br />
          Android is a trademark of Google Inc.
        </div>
      </div>
    </footer>
  );
}
