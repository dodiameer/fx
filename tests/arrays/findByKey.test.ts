import {test} from "uvu"
import * as assert from "uvu/assert"
import {findByKey} from "../../src/arrays/findByKey"

test("Returns an object when it's key matches specified value", () => {
  const testValue = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Joe"},
  ]
  const expected = {id: 2, name: "Jane"}
  const actual = findByKey(testValue, "id", 2)
  assert.equal(actual, expected)
})

test("Returns `null` when there's no match", () => {
  const testValue = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Joe"},
  ]
  const expected = null
  const actual = findByKey(testValue, "id", 4)
  assert.equal(actual, expected)
})

test("Throws when the passed parameter isn't an array", () => {
  const testValue = {id: 1, name: "John"}
  //@ts-expect-error The function takes a `Record<string,any>` as the first param but I'm checking for non-TS usage
  assert.throws(() => findByKey(testValue, "id", 1), Error)
})

test("Throws when the passes parameter is not an array of objects", () => {
  const testValue = [4, 4, 8, 7]
  //@ts-expect-error The function takes a `Record<string,any>` as the first param but I'm checking for non-TS usage
  assert.throws(() => findByKey(testValue, "id", 1), Error)
})

test.run()