import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='footer block bg-[#181818] bg-opacity-100 border border-t-secondary border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
        <Image src="/images/logo.png" width={50} height={50}/>
        <p className='text-slate-600'>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
