import {test} from "uvu"
import * as assert from "uvu/assert"
import {pullFromKey} from "../../src/arrays/pullFromKey"

test("Pulls out based on key", () => {
  const testValue = [
    {
      name: "John"
    },
    {
      name: "Jane"
    },
    {
      name: "Max"
    },
    {
      name: "Alex"
    }
  ]
  const expected = ["John", "Jane", "Max", "Alex"]
  const actual = pullFromKey(testValue, "name")
  assert.equal(actual, expected)
})


test("Pulls out dot-separated paths", () => {
  const testValue = [
    {
      name: {
        first: "John",
        last: "Doe"
      }
    },
    {
      name: {
        first: "Jane",
        last: "Doe"
      }
    },
    {
      name: {
        first: "Max",
        last: "Doe"
      }
    },
    {
      name: {
        first: "Alex",
        last: "Doe"
      }
    }
  ]

  const expected = ["John", "Jane", "Max", "Alex"]
  const actual = pullFromKey(testValue, "name.first")
  assert.equal(actual, expected)
})

test("Returns an array of `null` if the key doesn't exist", () => {
  const testValue = [
    {
      name: "John"
    },
    {
      name: "Jane"
    },
    {
      name: "Max"
    },
    {
      name: "Alex"
    }
  ]
  const expected = [null, null, null, null]
  const actual = pullFromKey(testValue, "age")
  assert.equal(actual, expected)
})

test.run()
