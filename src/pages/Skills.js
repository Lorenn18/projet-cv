import React from 'react'
import HomeSection1 from '../components/HomePage/HomeSection1';
import Layout from '../components/layouts/Layout';
import SkillSection from '../components/skillsPage/SkillSection';

export default function Skills() {
  return (
    <Layout>
      <main className="flex">
        <HomeSection1 />
        <SkillSection/>
      </main>
    </Layout>
  );
}
