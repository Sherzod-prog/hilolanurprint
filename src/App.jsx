import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home, About, Products, Services, Contacts } from "./components/Pages";
import Footer from "./components/Footer";
import NotFound from "./components/Notfound";

import "./App.css";

function App() {
  return (
    <>
      <div className="border-b-2 bg-gradient-to-r from-[#fb923c19] to-[#2ab40419]">
        <Header />
      </div>
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/about" Component={About} exact />
          <Route path="/products" Component={Products} exact />
          <Route path="/services" Component={Services} exact />
          <Route path="/contacts" Component={Contacts} exact />
          <Route path="*" Component={NotFound} exact />
        </Routes>
      </div>
      <div className="border-t-2 bg-gradient-to-r from-[#fb923c19] to-[#2ab40419]">
        <Footer />
      </div>
    </>
  );
}

export default App;
