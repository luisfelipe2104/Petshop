import TelaInicial from "./Pages/Tela-Inicial/Tela-Inicial";
import Agendamento from "./Pages/Agendamento/Agendamento";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </Router>

    </div>
  );
}