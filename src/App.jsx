import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home, About, Products, Services, Contacts } from "./components/Pages";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container h-screen">
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/about" Component={About} exact />
          <Route path="/products" Component={Products} exact />
          <Route path="/services" Component={Services} exact />
          <Route path="/contacts" Component={Contacts} exact />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
