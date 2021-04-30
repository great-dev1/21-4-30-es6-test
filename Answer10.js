A Promise is an object that represents the eventual completion(or failure) of an asynchronous operation, and its resulting value.
A Promise exists in one of these states
  - Pending: initial state, neither fulfilled nor rejected.
- Fulfilled: operation completed successfully.
- Rejected: operation failed.
The Promise object works as proxy for a value not necessarily known when the promise is created.It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason.

This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

Promises are used to handle asynchronous operations in JavaScript.They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.