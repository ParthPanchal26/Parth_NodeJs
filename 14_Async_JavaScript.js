/* Asynchronous JavaScript.
   -> Now the first point to understand about JavaScript is that in its most basic form.
   -> JavaScript is a Synchronous, Blocking, single-threaded language.

   => Synchronous.
     -> If we have two function which log messages to the console, code executes top down, with only one line executing at any given time.
   => Blocking.
     -> No matter how long a previous process takes, the subsequent processes won't kick off until the former is completed.
     -> Ex. Web apps runs in a browser and it executes an intensive chunk of code without returning control to the browser, the browser can appear to be frozen.
     -> This is called blocking.
     -> The browser is blocked from continuing to handel user input and perform other tasks until the web app returns control to the processor.
   => Single-Threaded.
     -> A thread is simply a process that your JavaScript program can use to run a task.
     -> Each thread can only do one task at a time.
     -> JavaScript has just the one thread called the main thread for executing any code.
     
   => Problem with Synchronous, blocking, single-threaded model of JavaScript.
   -> What if we have a task to retrieve data from the database and then run some code on data that is retrieved.
   -> We have to wait on the first line for the data to be fetched and when data finally comes back we can resume with our normal execution, but that could take 1 second or more.
   -> and that time we cannot run any further code.
   -> If it simply proceeds to the next line without waiting, we have an error because data is not what we expect it to be
   -> We need new pieces which are outside of JavaScript to help us write Asynchronous code.
   -> For FrontEnd, this is where web browser come into play. For BackEnd, this is where NodeJs comes into play.
   -> Web browsers and NodeJs define functions and APIs that allow us to register functions that should not be executed Synchronously, and should instead be invoked asynchronously when some kind of event occurs.
   -> For Ex., that could be the passage of time (setTimeout or setInterval), the user's interaction with the mouse, data being from file system or the arrival of data over the network (callbacks, Promises, async/await).
   -> You can let your code into several things at the same time without stopping or blocking your main thread.
*/