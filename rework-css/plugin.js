// rework-visit is used to iterate
// over properties inside media queries and keyframes
var visit = require('rework-visit');

// Export our plugin
module.exports = function plugin(ast, reworkInstance) {
  // the ast variable has all AST from our css code
  // rework-visit iterate over each rule and extract only declarations

  visit(ast, function (declarations, node) {
   // Now we can iterate over each declaration
   // and do whatever we want
   declarations.forEach(function (declaration) {

      // Here we're rewriting any font-family value to sans-serif
      if (declaration.property === 'font-family') {
        declaration.value = 'sans-serif';
      }
    });
  });
};
