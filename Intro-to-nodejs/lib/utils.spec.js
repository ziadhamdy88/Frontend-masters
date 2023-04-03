const {getNewUser, mapObjectToArray} = require("./utils")

describe("mapObjectToArray()", () => {
  test("maps valeus to array using callback", () => {
    const result = mapObjectToArray({age: 30, height: 188}, (k, v) => {
      return v + 10
    })

    expect(result).toEqual([40, 198])
  })

  test("callback gets called", () => {
    const mockCb = jest.fn()
    const resutl = mapObjectToArray({age: 30, height: 188}, mockCb)

    expect(mockCb.mock.calls.length).toBe(2)
  })
})

describe("getNewUser()", () => {
  test("it gets users", async () => {
    const user = await getNewUser(1)
    
    expect(user).toBeTruthy()
    expect(user.id).toBe(1)
  })

  test("no user found", async () => {
    expect.assertions(1)
    try {
      const user = await getNewUser(17)

    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
})