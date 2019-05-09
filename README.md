# tree-shaking-min-repro
Tests if an instance export of a class can be successfully tree-shaken.

It seems that when an *instance* of a class is exported from a module (but never imported into any other module) - Webpack is unable to tree-shake the class.
