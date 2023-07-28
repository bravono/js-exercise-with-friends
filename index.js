// This is a play ground

function increment (value) {
   if  (value *= 50) {
    value += 6 
   }
  
  }
  
  console.log(increment(1));
function problem(x) {
  // Dealing with none interger value
  if (typeof x != "number") return "Error";

  return x * 50 + 6;
}

console.log(problem(1));
