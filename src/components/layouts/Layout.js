import React from 'react'
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';

export default function Layout({children}) {
  return (
    <div className="pl-2 pr-2 md:p-9 ">
      <Navigation />
      <main className='bg-[#f5f0f0]'>{children}</main>
      <Footer />
    </div>
  );
}
