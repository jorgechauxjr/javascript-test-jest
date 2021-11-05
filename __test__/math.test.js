import { sumar, multiplicar, restar, dividir } from '../math.js';

describe('Suite Calculos matematicos', () => {
  test('Prueba de sumas', () => {
    expect(sumar(1, 1)).toBe(2);
  });

  test('Prueba multiplicacion', () => {
    expect(multiplicar(2, 2)).toBe(4);
  });

  test('Prueba resta', () => {
    expect(restar(5, 2)).toBe(3);
  });
  
  test('Prueba division', () => {
    expect(dividir(10, 2)).toBe(5);
  });
});
