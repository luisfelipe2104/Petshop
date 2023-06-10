import TelaInicial from "./Pages/Tela-Inicial/Tela-Inicial";
import Agendamento from "./Pages/Agendamento/Agendamento";
import TelaDados from "./Pages/Tela-Dados/Tela-Dados";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { ToastContainer } from 'react-toastify';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/dados" element={<TelaDados />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}