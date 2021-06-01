# Data validation with JavaScript

TL;DR

## What is right, what is wrong?

Once computational tasks are based on data, the program usually expects a well-defined input. If this input is not equal with the data-structure internally used by the program, there has to be a lexical transformation (lexer) before the interpretation of the data (interpreter). To keep the lexer and the interpreter happy and work as expected it’s probably a good idea to have both parts checking the input before they do their work.

an interpreter in between – sometimes even a lexical transformation.

has a certain flexibility or a complex structure that has to be interpreted by the system then this process of taking the input and get a model out of it in a highly standardized then called parsing (lexer and interpreter)..

If a computational task is applied on a set of data it’s often expected to

Why do we get it wrong at the first place?

Different approaches

Model (MVC)

Cluster

- Validate nested data
- Flexible validators
- Rich multilingual reporting in case of a Problem
- Ready for all kind of frameworks and tests

fally != false != invalid

– Nullish Coalescing Operato
– Optional chaning

```js
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
```
