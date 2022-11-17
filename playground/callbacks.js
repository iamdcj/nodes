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
