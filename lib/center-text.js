// Grabbed from underscore.string
// which I have found out already had this module's functionality -_-;;
var strRepeat = function(str, qty){
  if (qty < 1) return '';
  var result = '';
  while (qty > 0) {
    if (qty & 1) {
      result += str;
    }
    qty >>= 1;
    str += str;
  }
  return result;
};

function centerText(input, options) {
  // Fallback options
  options = options || {};
  var cols = options.columns || process.stdin.columns;

  // Calculate the offset for the text
  var deadSpace = cols - input;
  var offset = deadSpace / 2;
  var leftPadding = Math.floor(offset);
  var rightPadding = Math.ceil(offset);
  return strRepeat(' ', leftPadding) + input + strRepeat(' ', rightPadding);
}

module.exports = centerText;