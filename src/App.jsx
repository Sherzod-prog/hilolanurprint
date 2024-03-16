import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home, About, Products, Services, Contacts } from "./components/Pages";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="border-b-2 bg-gradient-to-r from-cyan-100 to-blue-100">
        <Header />
      </div>
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/about" Component={About} exact />
          <Route path="/products" Component={Products} exact />
          <Route path="/services" Component={Services} exact />
          <Route path="/contacts" Component={Contacts} exact />
        </Routes>
      </div>
      <div className="border-t-2 bg-slate-50">
        <Footer />
      </div>
    </>
  );
}

export default App;
