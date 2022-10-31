console.log("I will run first");

setTimeout(() => {
  console.log("I will run after everything else is done");
}, 2000);

console.log("I will run second");

setTimeout(() => {
  console.log("I will run after the following console logs are done");
});

console.log("I will run third");

console.log("I will run fourth");
