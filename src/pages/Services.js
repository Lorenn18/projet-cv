import React from 'react'
import HomeSection1 from '../components/HomePage/HomeSection1';
import Layout from '../components/layouts/Layout';
import ServicesSection2 from '../components/servicesPage/ServicesSection2';

export default function Services() {
  return (
    <Layout>
      <main className="flex">
        <HomeSection1 />
        <ServicesSection2/>
      </main>
    </Layout>
  );
}
