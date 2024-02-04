import "./App.css";
import { Home } from "./Components/Home.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { NewQuizPage } from "./Pages/NewQuizPage.jsx";
import { Login } from "./Components/auth/Login.jsx";
import { Register } from "./Components/auth/Register.jsx";
import { Route, Routes } from "react-router-dom";
import { Navbarnew } from "./Components/Navbar/Navbarnew.jsx";

function App() {

  return (
    <div className="App">
      <Navbarnew />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz" element={<NewQuizPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;