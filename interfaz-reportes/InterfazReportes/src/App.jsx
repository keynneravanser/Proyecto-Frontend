
import React from 'react';
import ReporteTrimestre from './components/ReporteTrimestre';
import ReporteFinal from './components/ReporteFinal';

function App() {
  const aprendiz = { nombre: 'Laura Torres' };

  // 🟡 Aquí va la simulación de datos
  const trimestres = [
    {
      trimestre: 1,
      reportes: [
        { competencia: 'Comunicación', nota: 4.6, observaciones: 'Muy participativo' },
        { competencia: 'Tecnología', nota: 4.8, observaciones: 'Dominio alto' },
      ],
    },
    {
      trimestre: 2,
      reportes: [
        { competencia: 'Comunicación', nota: 4.4, observaciones: 'Bien, pero con mejora' },
        { competencia: 'Tecnología', nota: 4.9, observaciones: 'Excelente' },
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Reportes del Aprendiz</h1>

      {/* Mostramos reportes por trimestre */}
      {trimestres.map((t, idx) => (
        <ReporteTrimestre
          key={idx}
          trimestre={t.trimestre}
          reportes={t.reportes}
        />
      ))}

      {/* Mostramos reporte final */}
      <ReporteFinal aprendiz={aprendiz} trimestres={trimestres} />
    </div>
  );
}

export default App;
