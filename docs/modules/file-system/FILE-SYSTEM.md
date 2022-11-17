# File System

The file system module exposes an object `fs` when imported into a program/module.

```
const fs = require('fs);
```

The `fs` object has a number of methods and properties attached to it which allow the programmer to interact with host computer's file systems, for example:

```
fs.writeFile()
```

The `writeFile` method will asynchronously write to a file:

```
fs.writeFileSync(`hello.txt`, "Hello World");
```

The above code will create a .txt file on the host machine containing the string "Hello World"