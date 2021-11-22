import { getDataFromApi } from "../promise";

describe('Probando promsesas', ()=> {
  test('Realizando una petición a una api', done => {
    const api = 'https://rickandmortyapi.com/api/character/';
    getDataFromApi(api).then(data => {
      // console.log("===", data);
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
});
