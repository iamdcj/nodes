# Event Loop

The event loop is a NodeJS construct which allows the runtime to perform non-blocking tasks despite JavaScript's single-threaded nature, i.e. it allows programs to continue doing synchronous tasks whilst asynchronous operations are taken care of in an efficient manner.

Browsers provide similar functionality, allowing callbacks and promises to be utilized throughout our applications, but in NodeJS the event loop is crucial to building performant back-end applications and APIs.

## How does it work?

The Event Loop works alongside the event and callback queues to ensure callbacks and promises are handled correctly by facilitating their path to the _Call Stack_ - a JavaScript feature which takes care of function calls and operations in the appropriate order.

Example

```
console.log('I will run first')

setTimeout(() => {

    console.log('I will run after everything else is done')
}, 2000)

console.log('I will run second')

setTimeout(() => {

    console.log('I will run after the following console logs are done')
})

console.log('I will run third')

console.log('I will run fourth')

```

Order of operations


1. SYNC: call stack processes the log method call
2. then the engine hits the `2000` delay timeout - ADDS IT TO EVENT QUEUE
3. SYNC: call stacks processes second log
4. then the engine hits timeout without delay - ADDS IT TO EVENT QUEUE
5. SYNC: call stacks processes third log
6. SYNC: call stack process fourth log

---

Now, here is where the event loop comes into play; the Node runtime handles the processing of the setTimeouts, ensuring the minimum time is respected - in this case the no-delay timeout is taken care of first despite it's parsing occuring before the `2000` delayed timeout call, and here is how it is done;

1. Node handles minimum time, in this case there isn't any, so:
2. Callback is added to callback queue
3. Event loop waits for the call stack to clear and adds it to the call stack
4. Callback is executed

The same thing happens again for the `2000` delayed method.