'use strict';

var clj = require('./main.js');

clj.core.eval(
 '(ns hello-world.core) (enable-console-print!) (println "Hello world Clojure!") (do (.log js/console "Hello world Node!") (+ 1 2 3)) (def x 3) (do (defn foo [a b] (* a b)) (.log js/console "Func" (foo 6 7))) (ns foo.bar (:require [hello-world.core]) (:require-macros [hello-world.macros])) (println (hello-world.core/foo 2 3))'

  , function (result) {
    // result hook for each computation line. Useful for libraries.
    console.log('>', result);
  }

);

