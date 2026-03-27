import { BrowserRouter, Routes, Route } from "react-router-dom";

import Principal from "./pages/Principal";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";
import Perfil from "./pages/Perfil";

import Inicio from "./pages/Inicio";
import Detalhes from "./pages/Detalhes";
import Contato from "./pages/Contato";
import Filme from "./pages/Filme";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Principal />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/perfil/:nome" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/inicio" element={<Inicio />} />
          <Route path="/detalhes" element={<Detalhes />} />
          <Route path="/contato" element={<Contato />} />

          <Route path="/filme/:id_filme" element={<Filme />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;