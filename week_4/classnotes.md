When reading a file using fs.readFile, we:
- Fetch from disk
- Load to memory
- CPU fetches from memory and computes

Streaming I/O
- Take a file and 'cleverly' cut it into pieces
- Load these pieces into RAM to circumvent loading extremely large files into RAM as a whole
- Like a "Buffer"
- fs.readStream()

**IMPORTANT**

- when we call a function that returns a promise, returning a result from a promise function
- when we chain a promise to a function that does not return a promise (which normally happens), the code is not asynch!!!
  - Example, returning `str.split()` . In theory the .then chain should break because we haven't returned a promise
- Why is the code still working?!?!?!?
  - Because behind the scenes JS takes what you return and wraps it in `New Prommise((resolve, reject => resolve([]) ))`
- This can 'add up', promises are not cheap and they cost memory.
- Rather than doing that we can:
  - Ask yourself, is the .then function doing something asynch? if yes continue if no:
    - call the non asynch function inside of a variable.    