let obj1 = {
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
let obj2 = {
  c: [
    {
      python: {
        java: 3,
      },
    },
    {
      i: {
        ok: 98,
      },
    },
  ],
  a: {
    b: {
      d: 0,
    },
  },
  d: 9,
};
const get = (obj, path, defaultValue) => {
  if (!obj || typeof obj !== "object" || !path || typeof path !== "string") {
    return defaultValue;
  }

  let keys = path.split(".");
  let tempObj = null;

  if (keys[0].includes("[")) {
    tempObj = obj[keys[0][0]];
    if (tempObj === undefined || !Array.isArray(tempObj)) {
      return defaultValue;
    }
    tempObj = tempObj.splice(parseInt(keys[0].match(/\d+/g)[0]), 1)[0];
  } else {
    tempObj = obj[keys[0]];
    if (tempObj === undefined) {
      return defaultValue;
    }
  }

  keys.splice(0, 1);

  if (keys.length > 0) {
    tempObj = get(tempObj, keys.join("."), defaultValue);
  }

  return tempObj;
};

let result = get(obj2, "c[0].python.java", "No Result");
console.log("🚀 ~ file: lodash_get_func.js ~ line 58 ~ result:", result);
