// const out = {
//   operation: "+",
//   left: 1,
//   right: 1,
// };

const input = "1 + 1";

const interpreter = (data) => {
  const handler = {
    "+": () => data.left + data.right,
  };
  return handler[data.operator]();
};

const lexer = (input) => {
  let [left, operator, right] = input.split(" ");
  return {
    operator,
    left: parseInt(left),
    right: parseInt(right),
  };
};

const lexed = lexer(input);
const result = interpreter(lexed);

console.log(lexed);
console.log(result);
