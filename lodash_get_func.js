let obj2 = {
  a: {
    b: {
      d: 0,
    },
  },
  b: {
    name: "Mohsin",
  },
  c: 9,
};
const get = (obj, path, defaultValue) => {
  if (
    obj === null ||
    typeof obj !== "object" ||
    Object.keys(obj).length === 0 ||
    path === null ||
    typeof path !== "string" ||
    path === ""
  ) {
    return defaultValue;
  }
  let index = 0;
  let keys = path.split(".");
  let length = keys.length;
  while (length !== 0) {
    for (const [key, value] of Object.entries(obj)) {
      var tempKey = key;
      if (keys[index] === key) {
        obj = value;
        break;
      }
    }
    if (tempKey !== keys[index]) {
      return defaultValue;
    }
    index = index + 1;
    length = length - 1;
    if (length === 0) {
      return obj;
    }
  }
};

let result = get(obj2, "b.name", "No Result");
console.log("🚀 ~ file: lodash_get_func.js ~ line 58 ~ result", result);
