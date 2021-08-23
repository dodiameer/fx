import {test} from "uvu"
import * as assert from "uvu/assert"
import {getFromPath} from "../../src/objects/getFromPath"

test("Gets path that exists", () => {
  const testValue = {
    a: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: "Value"
              }
            }
          }
        }
      }
    }
  }

  assert.equal(getFromPath(testValue, "a.b.c.d.e.f.g"), "Value")
})

test("Returns `null` if path doesn't exist", () => {
  const testValue = {
    a: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: "Value"
              }
            }
          }
        }
      }
    }
  }

  assert.equal(getFromPath(testValue, "a.b.e.f.g"), null)
})

test("Works if `path` is just an object key", () => {
  const testValue = {
    a: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: "Value"
              }
            }
          }
        }
      }
    }
  }

  assert.equal(getFromPath(testValue, "a"), testValue.a)
})

test.run()
