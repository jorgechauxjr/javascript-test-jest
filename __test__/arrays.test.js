import { arrayFruits, arrayColors } from "../arrays";

describe('Comprobaremos que existe un elemento', () => {
  test('¿contiene una banana?', () => {
    expect(arrayFruits()).toContain('banana');
  });

  test('No contiene un Platano', () => {
    expect(arrayFruits()).not.toContain('platano');
  });

  test('Comprobar el tamaño de un arreglo', () => {
    expect(arrayFruits()).toHaveLength(6);
  });

  test('Comprobaremos que existe un color', () => {
    expect(arrayColors()).toContain("azul");
  });
});
