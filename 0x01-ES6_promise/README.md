# ES6 Promises

In JavaScript, a Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and cleanly, especially when dealing with multiple asynchronous tasks or chaining them together. 
 
## A Promise can be in one of three states:

    - Pending: Initial state, neither fulfilled nor rejected. 
    - Fulfilled (resolved): The operation completed successfully. 
    - Rejected: The operation failed or encountered an error. 

## Code snippet
Handle multiple successful promises

In this snippet, I imported uploadPhoto and createUser from utils.js

Knowing that the functions in utils.js return promises, I used the prototype below to collectively resolve all promises and log body firstName lastName to the console.

function handleProfileSignup()

In the event of an error, log Signup system offline to the console

```
// eslint-disable-next-line no-unused-vars
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((response) => {
      console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
```