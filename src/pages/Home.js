import React from "react";
import Layout from "../components/Layout";
import "../stylings/global.css";
import MainCanvas from "../components/MainCanvas";

const Home = () => {
  return (
    <Layout>
      <section className="w-full h-[100vh]">
        <MainCanvas />
      </section>
    </Layout>
  );
};

export default Home;
