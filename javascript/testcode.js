function sum(a, b) {
  return a + b;
}

var result = sum(1, 2);
var expected = 5;

function expect(result) {
  return {
    toBe: function (expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}

// expect(sum(1, 2)).toBe(5);

function test(title, testCode) {
  try {
    testCode();
  } catch (error) {
    console.error(error);
  }
}

test("sum(1, 2) is not equal 5", function () {
  expect(sum(1, 2)).toBe(5);
});
