const express = require("express");
const server = express();

var caesarCipherEncryptor = function (str, key) {
  if (key < 0) return caesarShift(str, key + 26);
  var newText = "";
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c.match(/[A-z]/i)) {
      var code = str.charCodeAt(i);
      if (code >= 65 && code <= 90)
        c = String.fromCharCode(((code - 65 + key) % 26) + 65);
      else if (code >= 97 && code <= 122)
        c = String.fromCharCode(((code - 97 + key) % 26) + 97);
    }
    newText += c;
  }
  return newText;
};

var caesarCipherDecryptor = function (str, key) {
  if (key < 0) return caesarShift(str, key + 26);
  var newText = "";
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c.match(/[A-z]/i)) {
      var code = str.charCodeAt(i);
      if (code >= 65 && code <= 90)
        c = String.fromCharCode(((code - 65 - key + 26) % 26) + 65);
      else if (code >= 97 && code <= 122)
        c = String.fromCharCode(((code - 97 - key + 26) % 26) + 97);
    }
    newText += c;
  }
  return newText;
};

server.listen(3000, () => {
  console.log("Encrypt your data!");
  console.log("Encrypted text =>", caesarCipherEncryptor("Hello World!", 3));
  console.log("Decrypted Text =>", caesarCipherDecryptor("Khoor Zruog!", 3));
});
