import { test } from "uvu";
import * as assert from "uvu/assert";
import { pipe } from "../../src/functions/pipe";


test("Works with single-argument functions", async () => {
  const add = (a: number) => a + 1;
  const multiply = (a: number) => a * 2;
  const divide = (a: number) => a / 2;
  const subtract = (a: number) => a - 2;

  const allTheAbove = pipe(add, multiply, divide, subtract);
  const expected = 0;
  const actual = await allTheAbove(1);
  assert.equal(actual, expected);
});

test("Works with multi-argument functions", async () => {
  const add = (a: number, b: number) => a + b;
  const multiply = (a: number, b: number) => a * b;
  const divide = (a: number, b: number) => a / b;
  const subtract = (a: number, b: number) => a - b;

  const allTheAbove = pipe(
    (number: number) => add(number, 1),
    (result: number) => multiply(result, 2),
    (result: number) => divide(result, 2),
    (result: number) => subtract(result, 2)
  );
  
  const expected = 0;
  const actual = await allTheAbove(1);
  assert.equal(actual, expected);
});

test("Works with async single-argument functions", async () => {
  const add = async (a: number) => a + 1;
  const multiply = async (a: number) => a * 2;
  const divide = async (a: number) => a / 2;
  const subtract = async (a: number) => a - 2;

  const allTheAbove = pipe(add, multiply, divide, subtract);
  const expected = 0;
  const actual = await allTheAbove(1);
  assert.equal(actual, expected);
});

test("Works with async multi-argument functions", async () => {
  const add = async (a: number, b: number) => a + b;
  const multiply = async (a: number, b: number) => a * b;
  const divide = async (a: number, b: number) => a / b;
  const subtract = async (a: number, b: number) => a - b;

  const allTheAbove = pipe(
    (number: number) => add(number, 1),
    (result: number) => multiply(result, 2),
    (result: number) => divide(result, 2),
    (result: number) => subtract(result, 2)
  );

  const expected = 0;
  const actual = await allTheAbove(1);
  assert.equal(actual, expected);
})

test.run();
