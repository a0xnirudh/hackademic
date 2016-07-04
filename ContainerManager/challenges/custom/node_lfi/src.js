
var fs = require('fs');
exports.read_file = function(file_name) {  // Sanitize the function to avoid command inection
  var contents = fs.readFileSync(file_name, 'utf8');
  console.log(contents);
  return contents;
}
