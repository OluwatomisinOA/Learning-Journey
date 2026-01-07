# Types of Languages

1. Procedural

- specifies series of well structured steps and procedures to compose a program.
- contains a systematic order of statements, functions aand commands to completea task.

2. Functional

- writing a program only in pure functions i.e. never modify variables, but only create new ones as an output.
- used in situations where we have to perform lots of different operations on the same set of data, like ML.
- first class functions?

3. Object Orienteed

- revolves around objects
- code + data = object
- developed to make it easier to develop, debug, reuse, and maintain software.

# Static vs Dynamic Languages

1. Static

- Perform type checking at compile time
- Errors will show at compile time
- Declare data type before use it
- More control

2. Dynamic

- Perform type checking at runtimr
- Error might not show till program is run
- No neednto declare data type of variables
- Saves time in writing code but might give error at runtime

## Memory Management

# Type

1. Stack memory: refernce variables are stored in the stack memory, pointing towards the object in the heap memory.
2. Heap memory: objects are stored in the heap memory.

# Point

- More than one reference variable can point to the same object.
- If any one of the refernce variables change the object, original object is going to be changed and it is going to be change for all reference variables.
- An object with no reference variable will be removed from the memory when garbage collection hits.