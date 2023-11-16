// Sum Numbers
function sum(numbers) {
  "use strict";

  if (numbers.length === 0) return 0;
  return numbers.reduce((total, current) => total + current);
}
