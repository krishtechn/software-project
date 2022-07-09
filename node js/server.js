// Why learn node js?
// JavaScript is one of the most popular programming languages. The powerful Node.js runtime environment has been ranked the technology most commonly used by professional developers. Node.js is an event-driven JavaScript runtime. Node has myriad potential uses for JavaScript development including being a great environment for building efficient network applications.
// You should already Know:
// HTML, CSS, and Javascript.
// Possibly experience with other libraries and frameworks.

// How NodeJs differs from Vanilla JS
// 1)	Node runs on a server – not in a browser (backend not frontend)
// 2)	The console is the terminal window
//            Console.log(“Hello world”)
// 3)	Global object instead of window object
//            Console.log(global)

// 4)	Has common core modules that we will explore.
// 5)	Common js modules instead of ES6 modules.
// 6) misssing some js APIs like fetch 

  const os = require('os');
  const path = require('path');
  const math = require('./math');

//   DESTRUCTION
  const {add,mult} = require('./math');
  console.log(add(3,6));

//   console.log(os.type());
//   console.log(os.version());
//   console.log(os.homedir());
//   console.log(__dirname);
//   console.log(__filename);

//   console.log(path.dirname(__filename));
//   console.log(path.basename(__filename));
//   console.log(path.extname(__filename));
//   console.log(path.parse(__filename));