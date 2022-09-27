// function rail fence cipher decryption algorithm

console.log(decryptRailFenceCipher("actakt", 3));

function decryptRailFenceCipher(cipherText, key) {
  let rail = [];
  let result = "";
  let pos = 0;
  let dir = 1;
  let i = 0;
  let j = 0;

  for (i = 0; i < key; i++) {
    rail[i] = [];
  }

  for (i = 0; i < cipherText.length; i++) {
    rail[pos].push(cipherText[i]);
    pos += dir;
    if (pos === 0 || pos === key - 1) {
      dir = -dir;
    }
  }

  for (i = 0; i < key; i++) {
    for (j = 0; j < rail[i].length; j++) {
      result += rail[i][j];
    }
  }

  return result;
}

// print qucik sort algorithm
