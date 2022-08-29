import React from "react";
import Inicio from  '../Inicio/inicio';
import Pedidos from  '../Busqueda-Pedidos/pedidos';
import Formulario from  '../Formulario/formulario';
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
