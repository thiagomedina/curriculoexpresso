import React from "react";
import Navbar from "../../components/navbar";
import { background, teste } from "./home.module.scss";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className={`${background} ${teste}`}>
        <h2>Faça seu currículo de forma rápida e simples</h2>
        <p>lorem ipsu</p>
        <button>começar</button>
      </div>
    </>
  );
};

export default Home;