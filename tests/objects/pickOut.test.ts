import { test } from "uvu"
import * as assert from "uvu/assert"
import { pickOut } from "../../src/objects/pickOut"

test("Picks out values with `undefined` as default", () => {
  const testValue = {
    a: 1,
    b: 2,
    c: {
      d: 3,
    },
  }
  const expected = {
    a: 1,
    c: {
      d: 3,
    },
    e: undefined,
  }
  const actual = pickOut(testValue, ["a", "c", "e"])
  assert.equal(actual, expected)
})

test("Picks out values and sets specified defaults", () => {
  const testValue = {
    a: 1,
    b: 2,
    c: {
      d: 3,
    }
  }
  const expected = {
    a: 1,
    c: {
      d: 3,
    },
    e: 4,
  }
  const actual = pickOut(testValue, ["a", "c", "e"], { e: 4 })
  assert.equal(actual, expected)
})

test.run()