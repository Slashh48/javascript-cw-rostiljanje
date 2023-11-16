var countSheep = function (num) {
  let text = "";

  for (let i = 1; i <= num; i++) {
    text += i.toString() + " sheep...";
  }
  return text;
};
