console.log("test");

let arr = ["a", "b", "c"];
let func = (arr) => {
  let concat = "";
  for (let i in arr) {
    concat += arr[i];
  }
  return concat;
};

console.log(func(arr));
