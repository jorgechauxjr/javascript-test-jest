describe('Suite de comparadores comunes/Common Matchers', () => {
  const user = {
    name: "juan",
    lastname: "perez"
  }
  const user2 = {
    name: "juan",
    lastname: "perez"
  }

  test('Igualdad de elementos', () => {
    expect(user).toEqual(user2)
  });

  // test('No son exactamente iguales', () => {
  //   expect(user).not.toEqual(user2);
  // });

});
