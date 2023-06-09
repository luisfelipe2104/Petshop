import TelaInicial from "./Pages/Tela-Inicial/Tela-Inicial";
import Agendamento from "./Pages/Agendamento/Agendamento";
import TelaDados from "./Pages/Tela-Dados/Tela-Dados";
import Login from "./Pages/Login/Login";

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
        </Routes>
      </Router>

    </div>
  );
}