import React from 'react'
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';

export default function Layout({children}) {
  return (
    <div className="p-10">
      <Navigation />
      <main className='bg-[#f5f0f0]'>{children}</main>
      <Footer />
    </div>
  );
}
