# node-require-clojurescript
Proof of concept for Node hook allowing to require() ClojureScript modules.

* Status: WIP, pre-alpha

Use `https://github.com/swannodette/cljs-bootstrap/blob/master/script/build.clj`
to create a fresh version of ClojureScript compiler.

Resulted `main.js` is our ClojureScript compiler working in Node.

I added
``` js
module.exports = cljs_bootstrap;
```
to allow Node require() it:
``` js
// Load ClojureScript core:
var clj = require('./main.js');

// Use eval() to compile and run arbitrary ClojureScript code:
clj.core.eval('(do (.log js/console "Hi!"))');
```

I also have modified the compiled source (I know, it's a hackish hack :-) )
to prevent `eval()` output each executed portion of code to console.

Next steps could be using require hook like in this projects:
`http://coffeescript.org/documentation/docs/register.html`
or
`https://github.com/babel/babel/blob/master/packages/babel/src/api/register/node.js`

Also see `https://github.com/kanaka/cljs-bootstrap`
HN discussion: `https://news.ycombinator.com/item?id=9983204`
`http://www.matthewstump.com/misc/2012/06/04/writing-nodejs-modules-in-clojurescript/`

License: MIT

