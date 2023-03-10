export const questions = [
  {
    id: 1,
    question: "true + false == ?",
    answers: ["1", "NaN", "truefalse", "Error"],
    correct: "1",
  },
  {
    id: 2,
    question: '12 / "6" == ?',
    answers: ["2", "NaN", '"2"', "Error"],
    correct: "2",
  },
  {
    id: 3,
    question: '"number" + 15 + 3 == ?',
    answers: ["NaN", '"number18"', '"number153"', "Error"],
    correct: '"number153"',
  },
  {
    id: 4,
    question: '15 + 3 + "number" == ?',
    answers: ["NaN", '"18number"', '"153number"', "Error"],
    correct: '"18number"',
  },
  {
    id: 5,
    question: "[1] ≥ null",
    answers: ["NaN", "false", "true", "Error"],
    correct: "true",
  },
  {
    id: 6,
    question: '"foo" + + "bar" == ?',
    answers: ['"foobar"', "NaN", "fooNaN", "Error"],
    correct: "fooNaN",
  },
  {
    id: 7,
    question: '"foo" - "bar" == ?',
    answers: ['"foobar"', "NaN", "0", "Error"],
    correct: "NaN",
  },
  {
    id: 8,
    question: '("true" == true) == ?',
    answers: ["true", "false", "Error", "undefined"],
    correct: "false",
  },
  {
    id: 9,
    question: '(null == "") == ?',
    answers: ["true", "false", "Error", "undefined"],
    correct: "false",
  },
  {
    id: 10,
    question: "(null == undefined) == ?",
    answers: ["true", "false", "Error", "undefined"],
    correct: "true",
  },
  {
    id: 11,
    question: "(null === undefined) == ?",
    answers: ["true", "false", "Error", "undefined"],
    correct: "false",
  },
  {
    id: 12,
    question: '(!!"false" == !!"true") == ?',
    answers: ["true", "false", "Error", "undefined"],
    correct: "true",
  },
  {
    id: 13,
    question: '(["x"] == "x") == ?',
    answers: ["true", "false", "Error", "undefined"],
    correct: "true",
  },
  {
    id: 14,
    question: "[] + null + 1 == ?",
    answers: ["NaN", '"null1"', "1", '"001"'],
    correct: '"null1"',
  },
  {
    id: 15,
    question: '("0" || {}) == ?',
    answers: ["{}", '"0"', "0", "Error"],
    correct: '"0"',
  },
  {
    id: 16,
    question: "(0 || {}) == ?",
    answers: ["{}", '"0"', "0", "Error"],
    correct: "{}",
  },
  {
    id: 17,
    question: "([1,2,3] == [1,2,3]) == ?",
    answers: ["true", "false", "[1,2,3]", "Error"],
    correct: "false",
  },
  {
    id: 18,
    question: "new Date(0) - 0 == ?",
    answers: ["undefined", "Error", "0", "NaN"],
    correct: "0",
  },
  {
    id: 19,
    question: "(typeof null) == ?",
    answers: ["null", "object", "undefined", "string"],
    correct: "object",
  },
  {
    id: 20,
    question: "(Number(null)) == ?",
    answers: ["0", "Error", "undefined", "NaN"],
    correct: "0",
  },
  {
    id: 21,
    question: "(Number(undefined)) == ?",
    answers: ["0", "Error", "undefined", "NaN"],
    correct: "NaN",
  },
  {
    id: 22,
    question: '(Number("\n\n\n\n")) == ?',
    answers: ["0", "Error", "undefined", "NaN"],
    correct: "0",
  },
  {
    id: 23,
    question: "(null == 0) == ?",
    answers: ["false", "Error", "true", "undefined"],
    correct: "false",
  },
  {
    id: 24,
    question: "(null ≥ 0) == ?",
    answers: ["false", "Error", "true", "undefined"],
    correct: "true",
  },
  {
    id: 25,
    question: "(NaN == NaN) == ?",
    answers: ["false", "Error", "true", "NaN"],
    correct: "false",
  },
  {
    id: 26,
    question: "(Object.is(NaN, NaN)) == ?",
    answers: ["NaN", "true", "false", "Error"],
    correct: "true",
  },
  {
    id: 27,
    question: "(Object.is(+0, -0)) == ?",
    answers: ["NaN", "true", "false", "Error"],
    correct: "false",
  },
  {
    id: 28,
    question: "(+0 == -0) == ?",
    answers: ["NaN", "true", "false", "Error"],
    correct: "true",
  },
  {
    id: 29,
    question: "!+[] + [] + ![] == ?",
    answers: ["![][]![]", "truefalse", "1", "NaN"],
    correct: "truefalse",
  },
  {
    id: 30,
    question: "(Number(undefined)) == ?",
    answers: ["NaN", "null", "0", "Error"],
    correct: "NaN",
  },
  {
    id: 31,
    question: "(undefined == 0) == ?",
    answers: ["false", "true", "undefined", "Error"],
    correct: "false",
  },
  {
    id: 32,
    question: '(Boolean("0")) == ?',
    answers: ["false", "true", "undefined", "Error"],
    correct: "true",
  },
  {
    id: 33,
    question: '(Boolean("           ")) == ?',
    answers: ["false", "true", "undefined", "Error"],
    correct: "true",
  },
  {
    id: 34,
    question: "(typeof NaN) == ?",
    answers: ["number", "undefined", "null", "string"],
    correct: "number",
  },
  {
    id: 35,
    question: "(typeof new Date()) == ?",
    answers: ["object", "undefined", "number", "string"],
    correct: "object",
  },
  {
    id: 36,
    question: "(typeof function () {}) == ?",
    answers: ["object", "undefined", "function", "[object Object]"],
    correct: "function",
  },
  {
    id: 37,
    question: "(typeof [1, 2]) == ?",
    answers: ["object", "array", "string", "[object Object]"],
    correct: "object",
  },
  {
    id: 38,
    question: "(typeof a) == ?",
    answers: ["undefined", "Error", "string", "null"],
    correct: "undefined",
  },
  {
    id: 39,
    question: '"" + Symbol("my symbol") == ?',
    answers: ['"my symbol"', "Error", "undefined", '"0my symbol"'],
    correct: "Error",
  },
  {
    id: 40,
    question: "(typeof 3n) == ?",
    answers: ["number", "Error", "undefined", "bigint"],
    correct: "bigint",
  },
];
