export default function calcularDistintivo(promedio) {
  if (promedio >= 4.5) return 'Excelente';
  if (promedio >= 4.0) return 'Bueno';
  if (promedio >= 3.0) return 'Regular';
  return null;
}
