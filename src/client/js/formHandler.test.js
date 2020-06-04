import { checkURL } from "./urlChecker";
import { thisisFunc } from './formHandler';



test("asyncFunction", () => {
  thisisFunc();
  expect.assertions(1);
  function thisisFunc(data) {
    expect(data).toBeUndefined();
  }
});

