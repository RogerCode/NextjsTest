import Router from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout";
import { CountersState } from "../../store/states/counterState";


const Home = () => {
  return (
    <Layout>
      <section>
      <h1>Home</h1>
      </section>
    </Layout>
  )
}

export default Home