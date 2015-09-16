var rework = require('rework');
var fs     = require('fs');

// Loading my plugin
var plugin = require('./plugin');

// Reading the css source file which we'll change
var css = fs.readFileSync('./css/main.css', 'utf-8');

// Apply rework to our `css` file.
// with `use()` I using my plugin which i just required before
css = rework(css).use(plugin).toString();

// Output the css generated into another file
fs.writeFileSync('./css/bundle.css', css);
console.log('Done!');
