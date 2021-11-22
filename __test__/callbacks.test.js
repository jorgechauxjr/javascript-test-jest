import { myCallBack } from "../callbacks";

describe('Probando un Callback', () => {
  test('Callback', done => {
    function otherCallback(data) {
      expect(data).toBe('Hola Javascripters')
      done();
    }
    myCallBack(otherCallback);
  });
});
