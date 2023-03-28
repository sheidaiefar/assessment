function execute(code, variables) {
  let varz = JSON.parse(JSON.stringify(variables));
  let keys = Object.keys(varz);
  let a = varz[keys[0]];
  let b = varz[keys[1]];
  let exp = code.includes("$math.sum")
    ? a + b
    : code.includes("$math.mul")
    ? a * b
    : "";

  code.replace(/$logger/gi, console.log(eval(exp)));

  return code;
}

execute('$logger("Sum:", $math.sum(a, b))', { a: 47, b: 3 });
