import { Fragment } from "react";
import "./App.css";
import "antd/dist/reset.css";
import { Home } from "./Page/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Header } from "./template/Header/Header";
import { Footer } from "./template/Footer/Footer";
import { Telephone } from "./Page/Telephone/Telephone";
import { LoginUser } from "./Page/Login/LoginUser";
import { Detail } from "./component/Detail/Detail";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id?/telephone" element={<Telephone />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/user" element={<LoginUser />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
