**CPU vs Threads**

There are cores on the cpu that almost act like mini-cpus.
- If you have 4 cores then you can kind of think that you have 4 cpus.
- When you write code, the code is loaded into memory, the cpu fetches those instructions and runs them.

If we go inside of a cpu core there are **threads**.
- Threads are a space where the code executes.
- The code is actually running inside of the thread.

Ex:

```Javascript
let name = "dan";
writeFileSync("a.txt", name);

let result = 5*2
let ans = result + 2;
console.log(ans);
```
CPU fetches the instructions, threads run the instructions.

`writeFileSync` is 'slow' because it blocks the IO (input/output) when it is executed. Nothing else can run until that line is completed.
- This can create many problems, the code below `writeFileSync` is completely unrelated to it. It becomes blocked.
- Other languages solve this problem by multi-threading. Different code is run on different threads so it isn't IO blocking.

We create "a.txt" and writing dan. The code below runs calculations. Let's say we want to read the created file after the calculations are ran.

Node.js uses something called asynchrounous callbacks.
- This will write the file to our hard drive in the background
- This will allow our calculations to run
- The function will call the callback function when `writeFile` finishes.
- We put the code that depends on the function to run in callback so it runs when the function finishes.



**It is very difficult to write code that uses multi-threading without bugs**

**JS is single-threaded. This is because it was originally created to manipulate DOM and cannot support multi-threading (UI inconsistencies, etc)**

- During the length of this course avoid using Sync functions like `readFileSync` and `writeFileSync`.
