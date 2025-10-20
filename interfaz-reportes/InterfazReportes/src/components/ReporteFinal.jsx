import React from 'react';
import Distintivo from './Distintivo';
import calcularDistintivo from '../utils/calcularDistintivo';

function ReporteFinal({ aprendiz, trimestres }) {
  const todasNotas = trimestres.flatMap(t => t.reportes.map(r => r.nota));
  const promedio = todasNotas.reduce((a, b) => a + b, 0) / todasNotas.length;
  const distintivo = calcularDistintivo(promedio);

  return (
    <div className="card p-3 mt-4">
      <h2>Reporte Final de {aprendiz.nombre}</h2>
      <p><strong>Promedio general:</strong> {promedio.toFixed(2)}</p>
      {distintivo && <Distintivo tipo={distintivo} />}
    </div>
  );
}

export default ReporteFinal;
