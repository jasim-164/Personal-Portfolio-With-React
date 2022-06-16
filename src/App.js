import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader, ClipLoader, PacmanLoader } from "react-spinners";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader"><PacmanLoader color={'#64ffda'} loading={loading} size={30}  /></div>
      ) : (
        <>
          {" "}
          <Header />
          <Routes></Routes>
          <Typical
          steps={["Hello", 500, "world!", 500, "jasim", 500]}
          loop={Infinity}
          wrapper="p"
        />
        </>
      )}
    </div>
  );
}

export default App;
