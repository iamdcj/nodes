// common callbacks
const aCallback = () => console.log("hey hey");

setTimeout(aCallback, 3000);

const anotherCallback = (name, index) => console.log(name, index);

["david", "steph", "nole"].map(anotherCallback);

const myFunction = (callback) => {
  callback();
};

myFunction(() => {
  console.log("oi oi");
});

const add = (a, b, callback) => {
  const sum = a + b;

  setTimeout(() => {
    callback(sum);
  }, 2000);
};

add(4, 9, (sum) => console.log(sum));
