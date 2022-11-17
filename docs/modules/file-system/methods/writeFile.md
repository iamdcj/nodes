# fs.writeFile

The `writeFile` method will allow the engineer to asynchronously write to a file when imported into a program/module.

```
const fs = require('fs);


fs.writeFile(`hello.txt`, "Hello World", () => { //callback body });
```

The above code will create a .txt file on the host machine containing the string "Hello World" and fire a callback function when the operation is complete.
