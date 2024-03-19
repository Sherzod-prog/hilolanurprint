import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Home, About, Products, Services, Contacts } from "./components/Pages";
import Footer from "./components/Footer";
import NotFound from "./components/Notfound";

import "./App.css";
import { options } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(theme);
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  return (
    <div className="dark:text-gray-100 dark:bg-slate-900 duration-100">
      <div className="border-b-2 bg-gradient-to-r from-[#fb923c19] to-[#2ab40419]">
        <Header theme={theme} setTheme={setTheme} />
        {/* {options.map((opt) => (
          <button
            onClick={() => setTheme(opt.text)}
            key={opt.text}
            className={`flex gap-2 text-xl rounded-full mx-2 ${
              theme === opt.text && "text-sky-600"
            }`}
          >
            <FontAwesomeIcon icon={opt.icon} />
          </button>
        ))} */}
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
    </div>
  );
}

export default App;
