// This is a play ground

function problem(x) {
  // Dealing with none interger value
  if (typeof x != "number") return "Error";

  return x * 50 + 6;
}

console.log(problem(1));
