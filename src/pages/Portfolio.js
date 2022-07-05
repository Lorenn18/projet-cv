import React from 'react'
import HomeSection1 from '../components/HomePage/HomeSection1';
import Layout from '../components/layouts/Layout'
import PortfolioSection2 from '../components/portfolioPage/PortfolioSection2';

export default function Portfolio() {
  return (
    <Layout>
      <div className="flex">
        <HomeSection1 />
        <PortfolioSection2/>
      </div>
    </Layout>
  );
}
