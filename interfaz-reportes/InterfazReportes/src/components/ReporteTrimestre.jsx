import React from 'react';

function ReporteTrimestre({ trimestre, reportes }) {
  return (
    <div className="mb-4">
      <h3>Trimestre {trimestre}</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Competencia</th>
            <th>Nota</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {reportes.map((r, idx) => (
            <tr key={idx}>
              <td>{r.competencia}</td>
              <td>{r.nota}</td>
              <td>{r.observaciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReporteTrimestre;
