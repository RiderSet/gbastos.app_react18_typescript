import { Routes, Route, Navigate } from "react-router-dom"
import { useEffect } from 'react';
import { useDrawerContext } from '../crossCutting/context';
import { Dashboard, Pessoa, PessoasGrid, Carro, CarrosGrid } from '../Pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
      {
        icon: 'location_city',
        path: '/cidades',
        label: 'Cidades',
      },
      {
        icon: 'people',
        path: '/pessoas',
        label: 'Pessoas',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="/pessoas" element={<PessoasGrid />} />
      <Route path="/pessoas/detalhe/:id" element={<Pessoa />} />

      <Route path="/cidades" element={<CarrosGrid />} />
      <Route path="/cidades/detalhe/:id" element={<Carro />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};