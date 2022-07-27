const _ = require("lodash");
const dataArray = {
  1111: [
    { ID: 112, name: "John", age: 23 },
    { ID: 113, name: "Doe", age: 21 },
    { ID: 114, name: "Stan", age: 24 },
  ],
  2222: [
    { ID: 222, name: "Sara", age: 15 },
    { ID: 223, name: "Wiliams", age: 61 },
    { ID: 224, name: "Alan", age: 45 },
  ],
};

const removeValues = [112, 223, 114];

for (const [key, value] of Object.entries(dataArray)) {
  removeValues.forEach(function (v) {
    _.remove(value, (temp) => temp.ID === v);
  });
}
console.log("Result: ", dataArray);
