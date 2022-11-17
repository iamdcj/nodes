# What is nodeJS?

It is a javasript runtime which provides the means to run javascript programs on the server-side.

Previously, JS was exclusive to client-side engineering, i.e. it would only work in the browser.

NodeJS runs as a stand-alone process on a machine, and allows interactions with the file system, databases, and network requests - this allows engineers to create web servers, application Application Programming Interace (APIs), Command Line Interfaces (CLIs).


## What is a runtime?

It is an environment where programs are executed - they provide certain objects(e.g. `global`, `process`), functions, and libraries that allow programs to perform certain tasks by extending the core javascript language.

The Node runtime:

    - utilises the Chrome V8 Javascript engine to compile and run Javascript code.
    - provides the tools and functions to the V8 engine to perform the following operations
        - interact with filesystem
        - intercept network requests


Essentially it is another context where javascript programs can run, the browser being the other context/environment where javascript runs, only with different objects(e.g. `window`, `document`) and functions to work with.
    

## Model

Javascripts utilises an event-driven, non-blocking input-output method to run applications.

### Non-blocking

As per browsers, node allows actions to occur without blocking further actions from taking place, e.g. if something needs to be retrieved from the filesystem the application can continue to do other things whilst it waits.


