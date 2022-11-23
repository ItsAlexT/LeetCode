// https://leetcode.com/problems/encode-and-decode-strings/

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
 var encode = function (strs) {
    const lenStrs = strs.length;
    const lenArrays = new Array(strs.length);
    for (let j = 0; j < strs.length; j++) {
      const piece = strs[j];
      const lenPiece = piece.length;
      const arrayPiece = new Array(lenPiece);
      for (let i = 0; i < lenPiece; i++) {
        arrayPiece[i] = String.fromCharCode(piece.charCodeAt(i) + 13);
      }
      const newPiece = arrayPiece.join("");
      lenArrays[j] = newPiece;
    }
    let retStr = "" + lenArrays.length + "-";
    let secondPiece = "";
    for (let i = 0; i < lenArrays.length; i++) {
      retStr = retStr + lenArrays[i].length + "-";
      secondPiece = secondPiece + lenArrays[i];
    }
  
    return retStr + secondPiece;
  };
  
  /**
   * Decodes a single string to a list of strings.
   *
   * @param {string} s
   * @return {string[]}
   */
  var decode = function (s) {
    const arrayS = s.split("-");
    const origSize = parseInt(arrayS[0]);
    const origArray = new Array(origSize);
    // Find length of original string
    let lenAux = 0;
    let counter = 0;
    let left = 0;
  
    for (let i = 0; i < origSize + 1; i++) {
      lenAux = lenAux + arrayS[i].toString().length + 1;
    }
  
    const alterString = s.substring(lenAux);
  
    while (counter<origSize) {
      const lengthStr = parseInt(arrayS[counter + 1]);
      if (lengthStr === 0) {
        origArray[counter] = "";
      } else {
        const tmpStr = alterString.substring(left, left + lengthStr);
        const newStr = new Array(lengthStr);
  
        for (let i = 0; i < tmpStr.length; i++) {
          newStr[i] = String.fromCharCode(tmpStr.charCodeAt(i) - 13);
        }
        origArray[counter] = newStr.join("");
      }
      counter++;
      left = left + lengthStr;
    }
  
    return origArray;
  };

const dummy_input = ["Hello","World"]
console.log("Original: ",dummy_input)
const encoded = encode(dummy_input)
console.log("Encoded: ",encoded)
const decoded = decode(encoded)
console.log("Decoded: ",decoded)

/*
Example 1:
    Input: dummy_input = ["Hello","World"]
    Output: ["Hello","World"]
    Explanation:
    Machine 1:
    Codec encoder = new Codec();
    String msg = encoder.encode(strs);
    Machine 1 ---msg---> Machine 2

    Machine 2:
    Codec decoder = new Codec();
    String[] strs = decoder.decode(msg);

Example 2:
    Input: dummy_input = [""]
    Output: [""]
    */