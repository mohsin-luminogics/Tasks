let expression = "[OR,[<,a,b],[AND,[==,c,d],[!=,e,f]]]";
let expression_list = expression.split(",");

let stack = [];
let result = "";

expression_list.forEach((element) => {
  if (
    element.includes("OR") ||
    element.includes("AND") ||
    element.includes("==") ||
    element.includes("!=")
  ) {
    if (
      element[0] === stack[stack.length - 1] &&
      (element.includes("OR") || element.includes("AND"))
    ) {
      result += "(";
      stack.push(element.substring(1));
    } else {
      stack.push(element[0]);
      stack.push(element.substring(1));
    }
  } else {
    for (let index = 0; index < element.length; index++) {
      let temp = element[index];
      if (temp.toLowerCase() !== temp.toUpperCase()) {
        if (
          stack[stack.length - 1].toLowerCase() !==
          stack[stack.length - 1].toUpperCase()
        ) {
          result += stack.pop();
          result += stack.pop();
        }
      } else if (temp === "]") {
        while (stack.length != 0) {
          let bin = stack.pop();
          if (bin === "[") {
            if (temp === "") {
              stack.push(bin);
              break;
            }
            temp = "";
          } else {
            result += bin;
          }
        }
      }
      if (stack.length === 0 && temp === "]") {
        result += ")";
      } else if (temp) {
        stack.push(temp);
      }
    }
  }
});
console.log(result);
