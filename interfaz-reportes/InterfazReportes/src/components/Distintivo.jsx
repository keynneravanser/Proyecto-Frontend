function Distintivo({ tipo }) {
  const estilos = {
    Excelente: 'badge bg-success',
    Bueno: 'badge bg-primary',
    Regular: 'badge bg-warning text-dark',
  };

  return (
    <span className={estilos[tipo]}>
      {tipo} desempeño
    </span>
  );
}

export default Distintivo;
