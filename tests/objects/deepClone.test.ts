import {test} from "uvu"
import * as assert from "uvu/assert"
import {deepClone} from "../../src/objects/deepClone"

test("Deep-clones an object", () => {
  const testValue = {
    a: 1,
    b: {
      c: 2,
    }
  }
  const clone = deepClone(testValue)
  assert.is.not(clone, testValue)
  assert.is.not(clone.b, testValue.b)
})

test("Deep-clones an Array", () => {
  const testValue = [{ a: 1 }, { a: 5 }, { a: 3 }]
  const clone = deepClone(testValue)
  assert.is.not(clone, testValue)
  assert.is.not(clone[0], testValue[0])
})

test.run()
