//QUESTION
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// describe("Basic tests", () => {
// it("Testing for fixed tests", () => {
//   assert.strictEqual(problem("hello"), "Error");
//   assert.strictEqual(problem(1), 56);
//   assert.strictEqual(problem(5), 256);
//   assert.strictEqual(problem(0), 6);
//   assert.strictEqual(problem(1.2), 66);
//   assert.strictEqual(problem(3), 156);
//   assert.strictEqual(problem("RyanIsCool"), "Error");
//   assert.strictEqual(problem(-3), -144);
//   assert.strictEqual(problem(""), "Error");
//   assert.strictEqual(problem(0.03), 7.5);
// })
// })

// The question ask us to increment!
function problem(x) {
  return x;
}

console.log(problem("Ahbideen"));
// from my understanding of the code above, we're to write a funtion that'll increment the value of a given variable by 6 and it must return a number otherwise it should return an error message.

function increment(value) {
  value += 6;
  value *= 50;
  return value;
}

console.log(increment(1));

console.log(increment(1));
