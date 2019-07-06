const { Greet, ArithmeticOperation } = require("../callback/callback-function");

describe("Greet", () => {
  let greet;
  let greeting;

  beforeEach(() => {
    greet = new Greet();
    greeting = greet.greeting;
  });

  it("should return default message", () => {
    let msg = greet.processGreeting(greeting);
    expect(msg).toBe("Hello, Callback!");
  });
  it("should return default message", () => {
    let name = "Adelson";
    let msg = greet.processGreeting(greeting, name);
    expect(msg).toBe("Hello, Adelson!");
  });
});

describe("Arithmetic Operation", () => {
  let operation;
  let addition;
  let subtraction;
  let multiplication;
  let division;
  let processNumbers;

  beforeEach(() => {
    operation = new ArithmeticOperation();
    addition = operation.addition;
    subtraction = operation.subtraction;
    multiplication = operation.multiplication;
    division = operation.division;
    processNumbers = operation.processNumbers;
  });

  it("should handle addition", () => {
    let result = processNumbers(2, 6, addition);
    expect(result).toBe(8);
  });
  it("should handle subtraction", () => {
    let result = processNumbers(2, 6, subtraction);
    expect(result).toBe(4);
  });
  it("should handle multiplication", () => {
    let result = processNumbers(2, 6, multiplication);
    expect(result).toBe(12);
  });
  it("should handle division", () => {
    let result = processNumbers(2, 6, division);
    expect(result).toBe(3);
  });
});
