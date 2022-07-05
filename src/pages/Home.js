import React from "react";
import HomeSection1 from "../components/HomePage/HomeSection1";
import HomeSection2 from "../components/HomePage/HomeSection2";
import Layout from "../components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex">
        <HomeSection1 />
        <HomeSection2/>
      </div>
    </Layout>
  );
}
