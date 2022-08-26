import React from "react";
import Inicio from  './inicio';
import Pedidos from  './pedidos';
import Formulario from  './formulario';
import { Routes, Route } from "react-router-dom";

function Rutas() {

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/pedidos" element={<Pedidos />} />
    </Routes>
  )
};

export default Rutas;
