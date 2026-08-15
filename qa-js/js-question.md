# JavaScript Questions and Answers

## 📖 Description

JavaScript is a high-level, interpreted programming language widely used for web applications. Known as the language of the web, it allows developers to implement complex, dynamic behavior on web pages.

- **JavaScript Extension:** `.js`
- **Example File:** `script.js`

---

## 🚀 How to Run JavaScript in the Terminal?

If you want to run JavaScript in your terminal, you need to install **Node.js** on your system. Node.js is an asynchronous event-driven JavaScript runtime environment.

### How to Install Node.js:

To download Node.js, visit the official website:

- 🔗 [Download Node.js](https://nodejs.org/en/download)

Once installed, open your IDE or terminal and run:

1. **Check Node.js Version:**
   ```bash
   node -v
   ```
2. **Run Your Program:**
   ```bash
   node script.js
   ```

---

## ❓ Questions with Answers

## 🟢 Level 1: Basic (1 - 20)

> ### 1. What is JavaScript?
>
> JavaScript is a high-level programming language used for web applications. It is lightweight and primarily used to create dynamic, interactive behavior on web pages.

> ### 2. What are the three keywords used to declare a variable in JavaScript?
>
> `var`, `let`, and `const`.

> ### 3. What is the difference between `let` and `const`?
>
> `let` allows you to reassign the variable's value later, while `const` creates a constant variable that cannot be reassigned.

> ### 4. What are the seven primitive data types in JavaScript?
>
> `String`, `Number`, `Boolean`, `BigInt`, `Undefined`, `Null`, and `Symbol`.

> ### 5. What is the difference between `==` and `===`?
>
> `==` compares only values (with automatic type conversion), while `===` compares both values and data types strictly.

> ### 6. What value does an uninitialized variable hold by default?
>
> `undefined`.

> ### 7. What is the purpose of the `null` value?
>
> It represents an intentional, explicit absence of any object value.

> ### 8. What does the modulus operator (`%`) do?
>
> It divides two numbers and returns the remainder (e.g., `10 % 3` returns `1`).

> ### 9. What are the three main logical operators in JavaScript?
>
> `&&` (Logical AND), `||` (Logical OR), and `!` (Logical NOT).

> ### 10. What is the output of `"5" + 5` in JavaScript?
>
> `"55"` (JavaScript converts the number to a string and concatenates them).

> ### 11. How do you write an `if` statement condition?
>
> Place the condition inside parentheses directly after the keyword: `if (condition) { ... }`.

> ### 12. What is the basic syntax to declare a function?
>
> `function functionName(parameters) { // code }`

> ### 13. How do you execute or call a function named `greet`?
>
> By using its name followed by parentheses: `greet();`.

> ### 14. What does the `return` keyword do inside a function?
>
> It stops the execution of the function and outputs a specific value back to where it was called.

> ### 15. What is an arrow function?
>
> A shorter, modern syntax for writing functions introduced in ES6, using the `=>` symbol (e.g., `const add = (a, b) => a + b;`).

> ### 16. What is the index number of the first element in a JavaScript array?
>
> `0` (JavaScript arrays are zero-indexed).

> ### 17. Which array method adds a new item to the very end of an array?
>
> `.push()`

> ### 18. Which array method removes the last item from an array?
>
> `.pop()`

> ### 19. How do you check the total number of items inside an array named `items`?
>
> By using the length property: `items.length`.

> ### 20. How do you access the value of a property named `age` inside an object named `user`?
>
> Using dot notation: `user.age` (or bracket notation: `user['age']`).

## 🟡 Level 2: Easy (21 - 40)

> ### 21. What is the difference between `var`, `let`, and `const`?
>
> `var` is function-scoped, can be hoisted and re-declared, and is generally avoided in modern JavaScript. `let` is block-scoped and can be reassigned but not re-declared in the same scope. `const` is also block-scoped but cannot be reassigned after declaration — though the contents of objects and arrays declared with `const` can still be mutated.

> ### 22. What is hoisting in JavaScript?
>
> Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope before code executes. `var` declarations are hoisted and initialized with `undefined`, function declarations are hoisted with their full body, but `let` and `const` are hoisted into a temporal dead zone and cannot be accessed before their declaration.

> ### 23. What is the difference between a function declaration and a function expression?
>
> A function declaration (`function foo() {}`) is hoisted completely, meaning it can be called before it appears in the code. A function expression (`const foo = function() {}` or `const foo = () => {}`) is not hoisted — it is only available after the assignment is executed.

> ### 24. What is a closure in JavaScript?
>
> A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has returned. Closures are used for data encapsulation, factory functions, event handlers, and maintaining state in functional patterns.

> ### 25. What is the difference between `null` and `undefined`?
>
> `undefined` means a variable has been declared but not assigned a value — it is the default value JavaScript assigns. `null` is an explicit assignment that represents the intentional absence of a value. `typeof null` returns `"object"` (a historical bug), while `typeof undefined` returns `"undefined"`.

> ### 26. What is type coercion in JavaScript?
>
> Type coercion is the automatic or implicit conversion of values from one data type to another. JavaScript performs coercion in operations like `"5" + 3` (→ `"53"`, string concatenation) and `"5" - 3` (→ `2`, numeric subtraction). Using `===` instead of `==` avoids unintended coercions.

> ### 27. What are template literals?
>
> Template literals are string literals enclosed in backticks (`` ` ``) that support multi-line strings and embedded expressions via `${expression}` syntax. Example: `` `Hello, ${name}!` ``. They were introduced in ES6 and eliminate the need for string concatenation.

> ### 28. What is destructuring in JavaScript?
>
> Destructuring is a syntax that extracts values from arrays or properties from objects into distinct variables. Array destructuring: `const [a, b] = [1, 2]`. Object destructuring: `const { name, age } = user`. It supports default values, renaming, and nested destructuring.

> ### 29. What are default parameters in JavaScript?
>
> Default parameters allow function parameters to have a default value if no argument is provided or if `undefined` is passed. Example: `function greet(name = "World") { return "Hello, " + name; }`. They replace the common pattern of `name = name || "World"`.

> ### 30. What is the spread operator (`...`) in JavaScript?
>
> The spread operator expands an iterable (array, string, object) into individual elements. In arrays: `[...arr1, ...arr2]` merges arrays. In function calls: `Math.max(...numbers)`. In objects: `{ ...obj1, ...obj2 }` merges objects (shallow copy). It is different from the rest parameter, which collects arguments.

> ### 31. What is the rest parameter (`...`) in JavaScript?
>
> The rest parameter syntax collects all remaining function arguments into an array. Example: `function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }`. Unlike `arguments`, rest parameters are true arrays with all array methods available.

> ### 32. What is the difference between `for...of` and `for...in`?
>
> `for...of` iterates over the values of any iterable object (arrays, strings, Maps, Sets). `for...in` iterates over the enumerable property keys of an object, including inherited properties. For arrays, `for...in` should be avoided as it may iterate over non-index properties.

> ### 33. What are the array methods `map()`, `filter()`, and `reduce()`?
>
> `map()` creates a new array by transforming each element with a callback. `filter()` creates a new array with elements that pass a test. `reduce()` accumulates all elements into a single value by applying a reducer function. All three are non-mutating and return new arrays (except `reduce()` which returns the accumulator).

> ### 34. What is the purpose of `Array.find()` and `Array.findIndex()`?
>
> `find()` returns the first element in an array that satisfies a testing function. `findIndex()` returns the index of the first matching element. Both return `undefined` / `-1` if no element matches. They are preferred over `filter()[0]` for finding single elements.

> ### 35. What is short-circuit evaluation in JavaScript?
>
> Short-circuit evaluation means that in `&&` expressions, the right side is not evaluated if the left side is falsy. In `||` expressions, the right side is not evaluated if the left side is truthy. This is used for conditional rendering (`isLoggedIn && <Profile />`), default values (`user || guestUser`), and optional chaining alternatives.

> ### 36. What is the nullish coalescing operator (`??`)?
>
> The `??` operator returns the right operand only when the left operand is `null` or `undefined`, unlike `||` which returns the right operand for any falsy value (including `0`, `""`, `false`). Example: `const port = options.port ?? 3000` — if `options.port` is `0`, `??` correctly returns `0` while `||` would return `3000`.

> ### 37. What is optional chaining (`?.`)?
>
> Optional chaining (`?.`) allows reading a property deep in an object chain without having to check for `null` or `undefined` at each step. If the value before `?.` is `null` or `undefined`, the expression short-circuits and returns `undefined` instead of throwing a TypeError. Example: `user?.address?.street`.

> ### 38. What is a ternary operator?
>
> The ternary operator (`condition ? valueIfTrue : valueIfFalse`) is a compact inline conditional expression. Example: `const label = isAdmin ? "Admin" : "User"`. While concise, deeply nested ternaries reduce readability and should be refactored into `if/else` statements.

> ### 39. What are getter and setter methods in objects?
>
> Getters (`get`) and setters (`set`) define computed or validated object properties. A getter is called when the property is accessed; a setter when it is assigned. Example: `get fullName() { return this.first + " " + this.last; }`. They allow adding logic to property access without changing the calling syntax.

> ### 40. What is `typeof` and what are all the possible values it returns?
>
> `typeof` returns a string indicating the type of the operand. Possible values: `"undefined"`, `"boolean"`, `"number"`, `"bigint"`, `"string"`, `"symbol"`, `"function"`, and `"object"`. Notably, `typeof null` returns `"object"` (a known language bug), and `typeof` an undeclared variable returns `"undefined"` without throwing.

## 🟠 Level 3: Medium (41 - 60)

> ### 41. What are Promises in JavaScript?
>
> A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: `pending`, `fulfilled`, and `rejected`. Promises are handled with `.then()` for success, `.catch()` for errors, and `.finally()` for cleanup that always runs. They replaced callback-based patterns and are the foundation for `async/await`.

> ### 42. What is `async/await` and how does it relate to Promises?
>
> `async/await` is syntactic sugar over Promises that makes asynchronous code look synchronous. An `async` function always returns a Promise. Inside it, `await` pauses execution until the Promise resolves. Errors are caught with `try/catch` rather than `.catch()`. The code is semantically identical to chaining `.then()` calls but far more readable.

> ### 43. What is the event loop in JavaScript?
>
> The event loop is the mechanism that allows JavaScript (single-threaded) to handle asynchronous operations. The call stack executes synchronous code. When async operations (timers, I/O) complete, their callbacks are queued in the callback queue (macrotask queue) or microtask queue (Promises). The event loop continuously checks if the call stack is empty and pushes queued callbacks onto it.

> ### 44. What is the difference between microtasks and macrotasks?
>
> Microtasks (Promise `.then`/`.catch`, `queueMicrotask`, `MutationObserver`) execute after the current task completes but before the next macrotask. Macrotasks (`setTimeout`, `setInterval`, I/O, UI rendering) execute one per event loop iteration. All microtasks are drained before the next macrotask runs, which can starve the rendering pipeline if microtasks queue infinitely.

> ### 45. What is prototypal inheritance in JavaScript?
>
> Every JavaScript object has an internal `[[Prototype]]` link to another object (its prototype). When you access a property that doesn't exist on an object, JavaScript walks up the prototype chain looking for it. `Object.create()` explicitly sets the prototype, and `class` syntax uses prototypal inheritance under the hood.

> ### 46. What is the difference between `call()`, `apply()`, and `bind()`?
>
> All three set `this` for a function. `call(thisArg, arg1, arg2)` invokes the function immediately with individual arguments. `apply(thisArg, [args])` invokes it immediately with arguments as an array. `bind(thisArg, arg1)` returns a new function with `this` permanently bound, useful for callbacks and event handlers.

> ### 47. What is the `this` keyword and how is it determined?
>
> `this` refers to the execution context of a function. Its value is determined by how the function is called: in a method, `this` is the object; in a regular function, `this` is the global object (or `undefined` in strict mode); in an arrow function, `this` is inherited from the enclosing lexical scope. `call`, `apply`, and `bind` can override `this` explicitly.

> ### 48. What are ES6 classes and how do they relate to prototypes?
>
> ES6 `class` syntax is syntactic sugar over JavaScript's prototype-based inheritance. A `class` body defines a constructor and methods that are added to the class's prototype. `extends` sets up the prototype chain, and `super` calls the parent class constructor or methods. Under the hood, it is still prototype delegation, not classical class-based inheritance.

> ### 49. What is the difference between deep copy and shallow copy?
>
> A shallow copy duplicates only the top-level properties; nested objects are still referenced, not copied. Methods: `Object.assign({}, obj)`, spread `{ ...obj }`. A deep copy duplicates all nested objects and arrays recursively, so changes to the copy do not affect the original. Methods: `structuredClone(obj)` (modern), `JSON.parse(JSON.stringify(obj))` (with limitations), or deep-copy libraries.

> ### 50. What is a generator function?
>
> A generator function (`function*`) returns a Generator object that implements both the iterator and iterable protocols. Execution pauses at each `yield` expression and resumes when `.next()` is called. Generators are used for lazy evaluation, infinite sequences, async control flow (with `yield` on Promises), and implementing custom iterators.

> ### 51. What is the Module system in JavaScript (ES Modules)?
>
> ES Modules use `import` and `export` keywords to share code between files. `export` marks values for external use (named exports or a default export). `import` brings those values in. ES Modules are statically analyzed (enabling tree-shaking), always in strict mode, and run asynchronously in browsers. They replace CommonJS (`require`/`module.exports`) in modern JavaScript.

> ### 52. What is `Symbol` in JavaScript?
>
> `Symbol` is a primitive type that creates a guaranteed-unique identifier. `Symbol('description')` creates a symbol that is never equal to any other value, even another Symbol with the same description. Symbols are used as unique object property keys that avoid name collisions, and well-known symbols (like `Symbol.iterator`) let you customize built-in language behaviors.

> ### 53. What is `WeakMap` and `WeakSet`?
>
> `WeakMap` stores key-value pairs where keys must be objects (not primitives). If the key object has no other references, it is eligible for garbage collection — the entry disappears automatically. This makes `WeakMap` useful for associating metadata with DOM nodes without causing memory leaks. `WeakSet` similarly holds objects that can be garbage collected. Neither is iterable.

> ### 54. What is `Proxy` in JavaScript?
>
> `Proxy` wraps an object and intercepts fundamental operations (property access, assignment, function calls) via handler traps. `new Proxy(target, handler)` where the handler defines traps like `get`, `set`, `has`, `deleteProperty`. Proxies power reactive frameworks (Vue 3), validation, logging, and auto-mocking.

> ### 55. What is `Reflect` in JavaScript?
>
> `Reflect` provides static methods that mirror the Proxy trap names (`Reflect.get`, `Reflect.set`, `Reflect.has`, etc.). They are useful inside Proxy handlers to perform the default behavior while adding custom logic. Unlike direct property access or assignment, `Reflect` methods return a boolean indicating success, enabling cleaner error handling.

> ### 56. What is the difference between `Map` and a plain object?
>
> A `Map` can have any value as a key (not just strings/symbols), maintains insertion order for iteration, has a built-in `.size` property, and does not have prototype properties that could conflict with keys. Plain objects are faster for simple lookups and work better with JSON. Use `Map` when keys are non-strings, when key order matters, or when you need frequent additions/deletions.

> ### 57. What is `Set` and when should it be used?
>
> A `Set` stores unique values of any type and maintains insertion order. It is useful for deduplication (`[...new Set(array)]`), membership testing (O(1) `.has()`), and accumulating unique values. Unlike arrays, Sets do not have index-based access or most array methods, but they are iterable with `for...of` and spread.

> ### 58. What are iterators and iterables in JavaScript?
>
> An iterable is an object with a `[Symbol.iterator]()` method that returns an iterator. An iterator is an object with a `next()` method that returns `{ value, done }`. Built-in iterables: arrays, strings, Maps, Sets, generators. The `for...of` loop, spread operator, and destructuring all work on iterables automatically.

> ### 59. What is `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()`?
>
> `Promise.all([...])` resolves when all promises resolve, rejects immediately if any reject. `Promise.allSettled([...])` always resolves with an array of outcome objects for all promises (never rejects). `Promise.race([...])` resolves/rejects with the first settled promise. `Promise.any([...])` resolves with the first fulfilled promise, rejects only if all reject.

> ### 60. What is event delegation?
>
> Event delegation attaches a single event listener to a parent element instead of multiple listeners on each child. When an event bubbles up from a descendant, the parent handler uses `event.target` to determine which child triggered it. This improves performance, reduces memory usage, and automatically handles dynamically added child elements.

## 🔴 Level 4: Hard (61 - 80)

> ### 61. What is the temporal dead zone (TDZ)?
>
> The temporal dead zone is the period between entering a block scope and the point where a `let` or `const` declaration is evaluated. Accessing the variable during this period throws a `ReferenceError`. This is why `let` and `const` are "hoisted" to the top of their block but not initialized, unlike `var` which is initialized to `undefined`.

> ### 62. What are the differences between `function()` and `() =>` (arrow functions)?
>
> Arrow functions have no own `this` (they inherit lexically), no `arguments` object, cannot be used as constructors (no `new`), and have no `prototype` property. They also cannot be used as generator functions. Regular functions have their own `this` determined at call time, support `arguments`, can be constructors, and have a `prototype`.

> ### 63. What is memoization and how do you implement it?
>
> Memoization caches the results of expensive function calls keyed by their arguments, returning the cached result for repeated calls with the same arguments. Implementation: `function memoize(fn) { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); if (cache.has(key)) return cache.get(key); const result = fn(...args); cache.set(key, result); return result; }; }`.

> ### 64. What is currying in JavaScript?
>
> Currying transforms a function that takes multiple arguments into a sequence of functions that each take one argument. `curry(add)(2)(3)` returns `5`. It enables partial application — pre-filling arguments to create more specialized functions. Example: `const add = a => b => a + b; const add5 = add(5); add5(3) // 8`.

> ### 65. What is function composition?
>
> Function composition combines multiple functions so the output of one becomes the input of the next. `compose(f, g, h)(x)` is equivalent to `f(g(h(x)))`. Libraries like Ramda and lodash/fp provide `compose`/`pipe` utilities. This is a core functional programming pattern that promotes reusability and declarative code.

> ### 66. What is the observer pattern / pub-sub pattern in JavaScript?
>
> The observer pattern defines a subscription mechanism to notify multiple objects (observers) about events that happen to a subject. The pub-sub (publish-subscribe) variant decouples publishers and subscribers through an event bus. JavaScript's `EventEmitter` (Node.js), custom event systems, and the browser's `addEventListener` are all forms of this pattern.

> ### 67. What are WeakRef and FinalizationRegistry?
>
> `WeakRef` holds a weak reference to an object, allowing it to be garbage collected even while the reference exists. You check if the object still exists with `.deref()`. `FinalizationRegistry` lets you register a callback that runs when a held object is garbage collected. Both are advanced tools for building caches, resource managers, and observability without memory leaks.

> ### 68. What is the difference between `structuredClone()` and `JSON.parse(JSON.stringify())`?
>
> `structuredClone()` is the modern, built-in way to deep-clone objects. It correctly handles `undefined`, `Date`, `Map`, `Set`, `ArrayBuffer`, `RegExp`, circular references, and more. `JSON.parse(JSON.stringify())` fails on `undefined`, `Date` (converts to string), `Map`/`Set`, `Infinity`, functions, circular references, and other non-JSON-safe values.

> ### 69. What is `Object.defineProperty()` and `Object.defineProperties()`?
>
> `Object.defineProperty(obj, 'prop', descriptor)` defines or modifies a property with a property descriptor that controls `value`, `writable`, `enumerable`, `configurable`, or getter/setter functions (`get`/`set`). Non-writable, non-configurable, non-enumerable properties are created this way — it is how `Object.freeze()` works internally.

> ### 70. What is the difference between `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()`?
>
> `Object.preventExtensions()` prevents new properties from being added. `Object.seal()` prevents adding or deleting properties but allows modifying existing values. `Object.freeze()` is the most restrictive — it prevents adding, deleting, and modifying properties. None of them deep-freeze nested objects.

> ### 71. What are tagged template literals?
>
> Tagged template literals call a function with the template's string parts and expression values. Syntax: `tag\`Hello, ${name}!\``. The tag function receives `(strings, ...values)`. This is used in styled-components (CSS-in-JS), SQL injection prevention, i18n/localization, and custom formatting engines.

> ### 72. What is the `in` operator versus `hasOwnProperty()`?
>
> The `in` operator returns `true` if a property exists anywhere in the prototype chain of an object: `'toString' in {}` returns `true`. `Object.hasOwn(obj, 'prop')` (or the older `obj.hasOwnProperty('prop')`) returns `true` only if the property exists directly on the object, not on its prototype.

> ### 73. What is `AbortController` and how is it used?
>
> `AbortController` provides a way to abort asynchronous operations like `fetch` requests. You create a controller, pass `controller.signal` to the `fetch` options, and call `controller.abort()` to cancel the request. When aborted, the Promise rejects with a `DOMException` named `AbortError`. It can also cancel streams and custom async operations.

> ### 74. What are the differences between `setTimeout`, `setInterval`, `requestAnimationFrame`, and `queueMicrotask`?
>
> `setTimeout(fn, delay)` executes `fn` once after at least `delay`ms. `setInterval` repeats. `requestAnimationFrame(fn)` runs `fn` before the next repaint (~16ms), ideal for smooth animations as it syncs with the display refresh rate. `queueMicrotask(fn)` schedules `fn` as a microtask, running after the current task and before any macrotask.

> ### 75. What is `Object.create(null)` and why is it useful?
>
> `Object.create(null)` creates an object with no prototype at all — it has no `toString`, `hasOwnProperty`, or any other inherited methods. This is useful for creating pure dictionary objects or lookup maps where property name collisions with inherited properties are a concern, especially when keys come from user input.

> ### 76. What is the difference between `Array.from()` and the spread operator for converting iterables?
>
> Both convert iterables to arrays, but `Array.from()` accepts a second mapping function argument: `Array.from({ length: 5 }, (_, i) => i)` creates `[0,1,2,3,4]`. It also works on array-like objects with `length` (like `NodeList`, `arguments`) that the spread operator may not handle in older environments. Spread is more concise for simple cases.

> ### 77. What is the Fetch API and how does it compare to XMLHttpRequest?
>
> The Fetch API provides a modern, Promise-based interface for HTTP requests. It is cleaner than XHR, supports streaming, works with the Service Worker API, and uses `Request`/`Response` objects. Unlike XHR, Fetch does not reject on HTTP error statuses (4xx, 5xx) — only network errors. You must check `response.ok` manually. XHR is event-based and has better progress tracking support.

> ### 78. What are design patterns commonly used in JavaScript?
>
> Common patterns include: Singleton (single instance), Module (encapsulation via closures/IIFE), Observer/Pub-Sub (event systems), Factory (object creation abstraction), Decorator (adding behavior dynamically), Strategy (interchangeable algorithms), Command (encapsulate requests), and Prototype (clone objects). Modern JavaScript leans toward functional patterns (composing functions, immutable data) alongside these.

> ### 79. What is `structuredClone()` vs `MessageChannel` for deep cloning?
>
> `structuredClone()` uses the structured clone algorithm and is the standard, synchronous approach. `MessageChannel` (posting to a channel and receiving the result) also uses structured cloning asynchronously and was a workaround before `structuredClone()` was standardized. Today, `structuredClone()` is the correct tool unless you need to transfer `Transferable` objects (like `ArrayBuffer`) without copying.

> ### 80. What is tree-shaking and how does it relate to ES Modules?
>
> Tree-shaking is a build optimization that removes unused code (dead code elimination) from the final bundle. It works because ES Module `import`/`export` syntax is static — the dependency graph is known at build time. Bundlers (Rollup, Webpack, esbuild) analyze the imports and exclude unexported/un-imported code. CommonJS `require()` is dynamic and prevents effective tree-shaking.

## ⚫ Level 5: Expert (81 - 100)

> ### 81. What is the JavaScript memory model and how does garbage collection work?
>
> JavaScript uses automatic garbage collection, primarily through mark-and-sweep. The GC starts from "roots" (global variables, call stack references) and marks all reachable objects. Unreachable objects are swept (freed). Modern engines (V8) use generational GC: objects are first allocated in "young generation" (short-lived, collected frequently) and promoted to "old generation" if they survive multiple collections.

> ### 82. What are memory leaks in JavaScript and what are common causes?
>
> Memory leaks occur when objects that are no longer needed remain reachable and are not garbage collected. Common causes: forgotten event listeners (especially on removed DOM elements), closures capturing large outer scopes, circular references between JS and DOM, global variables, caches without size limits, and retained references from timers (`setInterval`) that are never cleared.

> ### 83. What is V8's hidden class (Shape) optimization?
>
> V8 (and other engines) create hidden classes (internal representations of object shapes) to optimize property access with inline caches. When you always add properties in the same order to objects of the same "type," V8 reuses the same hidden class, enabling fast property lookups. Adding properties in different orders creates separate hidden classes and invalidates optimizations, slowing down property access.

> ### 84. What is the difference between JIT compilation and interpretation in JavaScript engines?
>
> Modern JavaScript engines (V8, SpiderMonkey) use Just-In-Time compilation. Code starts interpreted for fast startup, then a "baseline compiler" compiles hot functions to bytecode. A profiling "optimizing compiler" (TurboFan in V8) then generates highly optimized machine code for frequently called functions using speculative optimizations. If assumptions are invalidated (type changes), the code is deoptimized.

> ### 85. What are SharedArrayBuffer and Atomics?
>
> `SharedArrayBuffer` enables sharing memory between the main thread and Web Workers (avoiding copying). `Atomics` provides atomic operations (read-modify-write without race conditions) and synchronization primitives (`Atomics.wait`, `Atomics.notify`) for multi-threaded coordination. They were temporarily restricted after the Spectre vulnerability and require specific security headers (`Cross-Origin-Opener-Policy`, `Cross-Origin-Embedder-Policy`).

> ### 86. What is the Execution Context and what components does it contain?
>
> Each Execution Context (global, function, or eval) contains: a Variable Environment (holds `var` declarations), a Lexical Environment (holds `let`/`const` and function declarations), the `this` binding, and an outer environment reference (for scope chain lookup). When a function is called, a new Execution Context is created and pushed onto the call stack.

> ### 87. What is the Scope Chain and Lexical Scoping?
>
> Lexical scoping (static scoping) means that a function's scope is determined by where it is written in the source code, not where it is called from. The scope chain is built from nested lexical environments: when a variable is not found in the local environment, JavaScript looks up through the chain of outer environments to the global scope.

> ### 88. What are JavaScript design patterns for asynchronous flow control?
>
> Patterns include: Callback (oldest, prone to callback hell), Promises (chainable, explicit error handling), `async/await` (synchronous-looking, easiest to read), generators with a coroutine runner (co library pattern), Observable streams (RxJS), and the async iterator protocol (`for await...of`). Each trades readability, composability, and cancellation support differently.

> ### 89. What is the Revealing Module Pattern and how does it differ from the standard Module Pattern?
>
> The standard Module Pattern uses an IIFE to create private scope, exposing a public API by returning an object from the IIFE. The Revealing Module Pattern (RMP) defines all functions privately inside the IIFE and returns an object that references them. The RMP improves readability by keeping all logic consistent (private vs public is controlled only in the return statement), though it makes it harder to override individual methods.

> ### 90. What is the difference between composition and inheritance in JavaScript?
>
> Inheritance (is-a relationship) creates rigid hierarchies where subclasses inherit all parent behavior. Composition (has-a relationship) builds objects by combining smaller, single-purpose behaviors as mixins or higher-order functions. The principle "favor composition over inheritance" exists because deep inheritance hierarchies are fragile — changes to parent classes break all descendants.

> ### 91. What are Source Maps and why are they important?
>
> Source maps are files (`.map`) that map minified/transpiled production code back to the original source code (TypeScript, JSX, pre-bundled modules). When a runtime error occurs, the browser's DevTools uses the source map to show the original file and line number. They are essential for debugging production builds without exposing source to users (by controlling whether DevTools loads them remotely).

> ### 92. What is `eval()` and why should it be avoided?
>
> `eval()` executes a string as JavaScript code at runtime. It is dangerous because it can execute injected malicious code (XSS vector), it disables many engine optimizations (V8 cannot optimize functions containing `eval`), it breaks strict mode assumptions, and it runs in the current scope, potentially modifying local variables. Almost all valid use cases can be replaced with safer alternatives.

> ### 93. What is the difference between `for...of` with `async/await` and `Promise.all()` for async iteration?
>
> `for...of` with `await` processes async operations sequentially — each iteration waits for the previous to complete, which is correct for order-dependent tasks but slower for independent ones. `Promise.all()` fires all promises concurrently and waits for all to settle, which is faster for independent parallel tasks. Use `Promise.allSettled()` if you need all results even if some fail.

> ### 94. What are Observables (RxJS) and how do they differ from Promises?
>
> Observables represent a stream of values over time (zero, one, or many values). Unlike Promises (single async value, eager), Observables are lazy (nothing happens until subscribed), cancellable (unsubscribe), and can emit multiple values. RxJS provides operators (map, filter, debounceTime, switchMap) for composing asynchronous data streams, making them ideal for event streams, real-time data, and complex async workflows.

> ### 95. What is the difference between monomorphic and polymorphic call sites in V8?
>
> A monomorphic call site always receives objects of the same hidden class — V8 can optimize this with a single inline cache check. A polymorphic site receives objects of 2-4 different shapes, requiring multiple checks. A megamorphic site has more than 4 shapes and V8 falls back to the generic lookup path, significantly slower. Writing code that keeps function call sites monomorphic is a key performance optimization.

> ### 96. What is the JavaScript specification (ECMAScript) and how does it evolve?
>
> ECMAScript is the specification that defines the JavaScript language, maintained by TC39 at ECMA International. New features progress through 5 stages (0: Strawperson to 4: Finished). Stage 4 proposals are included in the annual ECMAScript release (ES2015/ES6, ES2016, etc.). The process ensures community feedback and multiple independent implementations before standardization.

> ### 97. What are JavaScript Realms?
>
> A Realm is a distinct global environment: a global object, a set of intrinsics (Array, Object, etc.), and a separate environment record. Each iframe, Web Worker, and separate Window is a different Realm. Objects created in different Realms are not `instanceof` the same constructor (`arr instanceof Array` fails across realms), which is why `Array.isArray()` is preferred.

> ### 98. What is tail call optimization (TCO) and does JavaScript support it?
>
> TCO is a compiler optimization where a function call in tail position (the last operation before return) reuses the current stack frame instead of creating a new one, enabling O(1) stack recursion. The ES6 specification mandates TCO in strict mode, but in practice only Safari/JavaScriptCore implements it. Node.js removed it after an experimental period. Most JavaScript recursion is not tail-call optimized in production.

> ### 99. What are the security best practices for JavaScript?
>
> Key practices: avoid `eval()` and `new Function()` with user input; sanitize and validate all user input; use `textContent` instead of `innerHTML` to prevent XSS; implement Content Security Policy (CSP) headers; use `rel="noopener noreferrer"` on external links; pin dependency versions; use `Subresource Integrity` (SRI) for CDN scripts; prefer `fetch` with CORS over JSONP; never store secrets in client-side JS.

> ### 100. What are the latest features in modern JavaScript (ES2023–2025)?
>
> Recent additions include: Array methods `toSorted()`, `toReversed()`, `toSpliced()`, `with()` (non-mutating versions of sort/reverse/splice); `findLast()` and `findLastIndex()`; `Array.fromAsync()`; `Object.groupBy()` and `Map.groupBy()`; `Promise.withResolvers()`; the `using` declaration with explicit resource management (`Symbol.dispose`); Set methods (`union`, `intersection`, `difference`); `Atomics.waitAsync()`; and the `Temporal` API (replacing `Date`).

---

## 📝 JavaScript Beginner Programming Questions (All 50 Items)

### 1. Basic Math & Simple Functions

1. Write a function to find the sum of two numbers.
2. Write a function to find the subtraction of two numbers.
3. Write a function to multiply two numbers.
4. Write a function to divide two numbers and return the quotient.
5. Write a function to find the remainder of two numbers using the modulus operator.
6. Write a function to find the square of a given number.
7. Write a function to calculate the area of a rectangle given its width and height.
8. Write a function to calculate the area of a circle given its radius.
9. Write a function to convert Celsius to Fahrenheit.
10. Write a function to convert Fahrenheit to Celsius.

### 2. Conditional Logic

11. Write a function that checks if a number is positive, negative, or zero.
12. Write a function to check if a given number is even or odd.
13. Write a function to find the maximum between two numbers.
14. Write a function to find the maximum among three numbers.
15. Write a function to check if a year is a leap year or not.
16. Write a function that takes a score (0-100) and returns a letter grade (A, B, C, D, F).
17. Write a function to check if a person is eligible to vote (age 18 or above).
18. Write a function that checks if a string is empty or not.
19. Write a function that checks if a given number is a multiple of 5.
20. Write a function that checks if a number lies between a specific range (e.g., between 10 and 50).

### 3. Loops & Series

21. Write a function to print numbers from 1 to 10 using a loop.
22. Write a function to print all even numbers between 1 and 20.
23. Write a function to print all odd numbers between 1 and 20.
24. Write a function to calculate the sum of numbers from 1 to n.
25. Write a function to calculate the factorial of a given number.
26. Write a function to print the multiplication table of a given number.
27. Write a function to count the number of digits in an integer.
28. Write a function to find the sum of all digits of a number.
29. Write a function to reverse a given number (e.g., 123 becomes 321).
30. Write a function to check if a given number is a prime number.

### 4. String Manipulation

31. Write a function to return the length of a string.
32. Write a function to convert a string to uppercase.
33. Write a function to convert a string to lowercase.
34. Write a function to reverse a string.
35. Write a function to check if a string is a palindrome (reads the same forward and backward).
36. Write a function to count the number of vowels in a string.
37. Write a function to concatenate two strings together.
38. Write a function to check if a string contains a specific substring.
39. Write a function to return the first character of a string.
40. Write a function to return the last character of a string.

### 5. Array Basics

41. Write a function to find the sum of all elements in an array.
42. Write a function to find the average of all elements in an array.
43. Write a function to find the largest number in an array.
44. Write a function to find the smallest number in an array.
45. Write a function to count how many times a specific element appears in an array.
46. Write a function to remove the first element from an array and return the new array.
47. Write a function to add an element to the beginning of an array.
48. Write a function to reverse the elements of an array.
49. Write a function to filter out all even numbers from an array and return a new array.
50. Write a function to check if an array contains a specific element.

## 🟡 Level 2: Medium (51 - 100)

### 6. String Methods & Regular Expressions

51. Write a function that capitalizes the first letter of each word in a sentence.
52. Write a function to count the occurrences of a specific character in a string.
53. Write a function that removes all whitespace from a string.
54. Write a function to check if a string starts with a specific prefix.
55. Write a function to truncate a string to a given length and add "..." if truncated.
56. Write a function to replace all occurrences of a word in a string.
57. Write a function to validate an email address using a regular expression.
58. Write a function to extract all numbers from a string.
59. Write a function to convert a string from camelCase to kebab-case.
60. Write a function to remove all duplicate characters from a string.

### 7. Array Methods

61. Write a function to flatten a nested array one level deep.
62. Write a function to remove duplicate values from an array.
63. Write a function to group an array of objects by a specific property.
64. Write a function to zip two arrays into an array of pairs.
65. Write a function using `reduce()` to count the frequency of each element in an array.
66. Write a function to find the intersection of two arrays.
67. Write a function to find the difference between two arrays.
68. Write a function to chunk an array into groups of a given size.
69. Write a function to rotate an array to the right by n positions.
70. Write a function that returns a new sorted array without mutating the original.

### 8. Objects & Data Structures

71. Write a function to deep-clone an object using `structuredClone`.
72. Write a function to merge two objects, with the second object's values taking precedence.
73. Write a function to pick specific keys from an object.
74. Write a function to omit specific keys from an object.
75. Write a function to invert the keys and values of an object.
76. Write a function that flattens a nested object with dot-notation keys.
77. Write a function to convert an array of key-value pairs into an object.
78. Write a function to convert an object into an array of `[key, value]` pairs.
79. Write a function to check if two objects are deeply equal.
80. Write a function to count the total number of properties in a nested object.

### 9. Functions & Closures

81. Write a closure-based counter that has increment, decrement, and reset methods.
82. Write a memoize function that caches results based on arguments.
83. Write a curried `add` function: `add(1)(2)(3)` returns `6`.
84. Write a `once` function that ensures a given function is only called one time.
85. Write a `debounce` function that delays execution until after a wait period.
86. Write a `throttle` function that limits how often a function can be called.
87. Write a function that partially applies arguments to another function.
88. Write a `compose` function that chains functions right to left.
89. Write a `pipe` function that chains functions left to right.
90. Write a function that retries a failed async operation up to n times.

### 10. Promises & Async

91. Write a function that wraps `setTimeout` in a Promise.
92. Write a function that fetches data from an API and returns the JSON response.
93. Write a function that runs multiple API calls in parallel and returns all results.
94. Write a function that races two Promises and returns the first resolved result.
95. Write a function that sequentially resolves an array of Promise-returning functions.
96. Write a function that adds a timeout to any Promise.
97. Write a function that retries a failed fetch request up to 3 times with exponential backoff.
98. Write a function that cancels a fetch request after 5 seconds using `AbortController`.
99. Write an async generator that yields paginated API results one page at a time.
100. Write a function that processes a large array in batches asynchronously to avoid blocking.

## 🟠 Level 3: Professional (101 - 150)

### 11. DOM Manipulation & Events

101. Write a function to create and append an element to the DOM dynamically.
102. Write an event delegation handler for a dynamic list of items.
103. Write a function to toggle a class on an element based on a condition.
104. Write a debounced input handler for a live search feature.
105. Write a function to observe DOM mutations using `MutationObserver`.
106. Write a function to lazily load images using `IntersectionObserver`.
107. Write a function that smoothly scrolls to a target element.
108. Write a function that clones a DOM node and replaces the original.
109. Write a drag-and-drop handler for reordering list items using the Drag and Drop API.
110. Write a function that detects when an element enters or leaves the viewport.

### 12. Object-Oriented Patterns

111. Implement a `Stack` class with `push`, `pop`, `peek`, `isEmpty`, and `size` methods.
112. Implement a `Queue` class with `enqueue`, `dequeue`, `peek`, and `isEmpty` methods.
113. Implement a `LinkedList` class with `append`, `prepend`, `delete`, and `print` methods.
114. Implement a `BinarySearchTree` with `insert` and `search` methods.
115. Implement a `EventEmitter` class with `on`, `off`, `emit`, and `once` methods.
116. Implement the Observer pattern with a `Subject` class and multiple `Observer` instances.
117. Implement the Singleton pattern ensuring only one instance is created.
118. Implement a `Mixin` utility that copies methods from multiple source objects.
119. Implement the Factory pattern to create different animal objects without `new`.
120. Implement a class with private fields (`#`) and getters/setters for controlled access.

### 13. Functional Programming

121. Write a `flatMap` implementation from scratch.
122. Write a `zip` function that combines multiple arrays element-by-element.
123. Implement a transducer that combines `map` and `filter` into a single pass.
124. Write a function that generates all permutations of an array.
125. Write a function that generates all subsets (power set) of an array.
126. Implement a lazy evaluation system using generator functions.
127. Write a monadic `Maybe` container to handle `null`/`undefined` safely.
128. Implement an immutable update utility (`immer`-like) for nested object updates.
129. Write a function that deeply freezes an object and all its nested properties.
130. Implement a reactive signal system (similar to Vue's `ref`) using closures.

### 14. Algorithms & Data Structures

131. Implement binary search on a sorted array.
132. Implement bubble sort and explain its time complexity.
133. Implement merge sort recursively.
134. Implement a hash map from scratch using an array and separate chaining.
135. Implement depth-first search (DFS) on a tree structure.
136. Implement breadth-first search (BFS) on a graph using adjacency list.
137. Write a function to detect a cycle in a linked list.
138. Implement the two-pointer technique to find pairs in a sorted array that sum to a target.
139. Write a function to find the longest common subsequence of two strings.
140. Implement a trie (prefix tree) with `insert` and `search` methods.

### 15. Browser APIs & Web Features

141. Implement a theme switcher that persists the user's preference to `localStorage`.
142. Write a function that uses the `History` API to update the URL without a page reload.
143. Implement a Service Worker that caches static assets for offline use.
144. Write a Web Worker script that performs heavy computation off the main thread.
145. Implement the Web Share API with a fallback to clipboard copy.
146. Write a function that uses the Geolocation API with error handling and timeout.
147. Implement a file reader that reads and previews images using the File API.
148. Write a function that uses `IndexedDB` to store and retrieve structured data.
149. Implement a real-time search using the `URLSearchParams` API to sync filters with the URL.
150. Write a function that implements virtual scrolling for a large list (only render visible items).

## 🔴 Level 4: Expert (151 - 200)

### 16. Performance & Optimization

151. Profile a JavaScript function using `console.time` and `performance.mark` to identify bottlenecks.
152. Refactor a nested loop O(n²) algorithm to O(n) using a `Map` for lookups.
153. Implement object pooling to reuse expensive object instances instead of creating new ones.
154. Write a virtual DOM diffing algorithm that determines the minimal set of DOM changes needed.
155. Implement a Web Worker communication bridge with structured message passing and response correlation.
156. Write a streaming JSON parser that processes large JSON files without loading them fully into memory.
157. Implement request deduplication — ensure identical concurrent API requests share a single network call.
158. Write a function that batches multiple DOM updates into a single `requestAnimationFrame` call.
159. Implement a performance observer that tracks Long Tasks and reports them to an analytics endpoint.
160. Build a task queue that processes jobs concurrently with a configurable concurrency limit.

### 17. Security

161. Implement a sanitize function that removes XSS vectors from untrusted HTML strings.
162. Write a CSRF token generator and validator using `crypto.randomUUID()`.
163. Implement a rate limiter for API calls using a token bucket algorithm.
164. Write a function that validates and signs a JWT payload using `SubtleCrypto`.
165. Implement Content Security Policy violation reporting with `SecurityPolicyViolationEvent`.
166. Write a function that uses `crypto.subtle` to hash a password using SHA-256.
167. Implement a secure random string generator for session tokens.
168. Write a function that detects and prevents prototype pollution in object merges.
169. Implement an input validation library that sanitizes types, lengths, and patterns.
170. Write a function that implements HMAC request signing for API authentication.

### 18. TypeScript Patterns (JavaScript perspective)

171. Convert a JavaScript function to use JSDoc type annotations for IDE type checking.
172. Implement a type-safe event emitter in TypeScript using generic types.
173. Write a TypeScript `DeepPartial<T>` utility type and implement a function using it.
174. Implement a discriminated union pattern in TypeScript for a state machine.
175. Write a TypeScript decorator that measures function execution time.
176. Implement a generic `Result<T, E>` type for explicit error handling without exceptions.
177. Write a TypeScript mapped type that makes all nested properties `readonly`.
178. Implement a builder pattern in TypeScript with method chaining and type inference.
179. Write a TypeScript conditional type that extracts all function properties from an interface.
180. Implement a TypeScript plugin system where plugins are type-safe and self-registering.

### 19. Modern JavaScript Architecture

181. Implement a micro-frontend communication bus using `CustomEvent` and `BroadcastChannel`.
182. Write a module federation configuration that shares dependencies between two Webpack builds.
183. Implement a plugin system where third-party code extends core functionality safely.
184. Write a state management store from scratch (like a minimal Redux) with `dispatch`, `getState`, and `subscribe`.
185. Implement an undo/redo system using the Command pattern with a history stack.
186. Write a reactive computation graph where derived values update when dependencies change.
187. Implement a simple dependency injection container using `Map` and reflection-like patterns.
188. Write a CSP-compliant script loader that dynamically loads scripts with nonce values.
189. Implement a client-side router with hash and history mode, including dynamic route parameters.
190. Write a streaming SSE (Server-Sent Events) consumer that reconnects on failure.

### 20. Real-World Challenges

191. Implement a complete client-side form validation library with async validators and custom error messages.
192. Write a rich text editor command system (bold, italic, link) using `document.execCommand` alternatives.
193. Implement a multi-step wizard component that persists state across steps and supports back navigation.
194. Write a real-time collaborative cursor sharing system using WebSockets and interpolation.
195. Implement an infinite scroll component with proper cleanup and intersection observer.
196. Build a chart rendering engine from scratch using Canvas API (line chart with axes and labels).
197. Implement a full-text client-side search engine using an inverted index.
198. Write a JavaScript-based PDF generator using canvas that renders a formatted document.
199. Implement a complete authentication flow: login, token refresh, logout, and protected route guards.
200. Build a complete offline-first todo app using IndexedDB, Service Workers, and background sync.

---

### **You will find these programs in `script.js` in this directory.**

> [script.js](https://github.com/alrifatsabbir/nsdahr/blob/main/qa-js/script.js)  
> [script.md](https://github.com/alrifatsabbir/nsdahr/blob/main/qa-js/script.md)

Explanation aren't available yet. But soon will be available.

---

# 👨‍💻 Author

### Al Rifat Sabbir

**Connect with me -**

<p align="center">
<a href="https://codepen.io/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://dev.to/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://twitter.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://linkedin.com/in/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://stackoverflow.com/users/24326530" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="24326530" height="30" width="40" /></a>
<a href="https://codesandbox.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codesandbox.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://kaggle.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://fb.com/alrifatsabbir1" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="alrifatsabbir1" height="30" width="40" /></a>
<a href="https://instagram.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://www.behance.net/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/behance.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://medium.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://www.codechef.com/users/alrifatsabbir" target="blank"><img align="center" src="https://cdn.codechef.com/images/cc-logo.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://www.hackerrank.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://codeforces.com/profile/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://www.leetcode.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://cses.fi/user/385526" target="blank"><img align="center" src="https://cses.fi/logo.png?1" alt="alrifatsabbir" height="30" width="40"/></a>
<a href="https://csacademy.com/user/alrifatsabbir" target="blank"><img align="center" src="https://vjudge.net/static/bundle/676cdd3d3793718b3d2c.png" alt="alrifatsabbir" height="30" width="40"/></a>
<a href="https://codemama.io/profile/alrifatsabbir" target="blank"><img align="center" src="https://cdn.ostad.app/public/upload/2023-10-26T08-16-40.927Z-cm-logo-long-white.svg" alt="alrifatsabbir" height="30" width="60" /></a>
<a href="https://atcoder.jp/users/alrifatsabbir" target="blank"><img align="center" src="https://img.atcoder.jp/assets/logo.png" alt="alrifatsabbir" height="30" width="40"/></a>
<a href="https://judge.u-aizu.ac.jp/onlinejudge/user.jsp?id=alrifatsabbir" target="blank"><img align="center" src="https://vjudge.net/static/bundle/72c318000fd40d15a16e.ico" alt="alrifatsabbir" height="30" width="40"/></a>
</p>
