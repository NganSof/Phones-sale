import { Fragment } from "react";
import "./App.css";
import "antd/dist/reset.css";
import { Home } from "./Page/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Header } from "./template/Header/Header";
import { Footer } from "./template/Footer/Footer";
import { Telephone } from "./Page/Telephone/Telephone";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id?/telephone" element={<Telephone />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
