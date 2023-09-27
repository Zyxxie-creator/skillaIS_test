import React from "react";
import "./App.css";
import { Header } from "./components/Header/header";
import { Slidebar } from "./components/Slidebar/slidebar";
import { Content } from "./components/Content/content";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header></Header>
        <Slidebar></Slidebar>
      </div>
      <Content></Content>
    </div>
  );
}

export default App;
