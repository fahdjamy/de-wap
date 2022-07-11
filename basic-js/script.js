function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function maxThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

function isVowel(vowel) {
  return ["a", "e", "i", "o", "u"].includes(vowel);
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function multiply(arr) {
  let product = 1;
  for (i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }

  return product;
}

function reverse(s) {
  let reversedStr = '';
  for (let i = s.length - 1; i >= 0; i--) {
    reversedStr += s[i];
  }
  return reversedStr;
}

function findLongestWord(words) {
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

function filterLongWords(words, i) {
  const longestWords = [];
  for (let j = 0; j < words.length; j++) {
    if (words[j].length > i) {
      longestWords.push(words[j]);
    }
  }

  return longestWords;
}

function testFunctions() {
  console.log('Expected output of max(20, 30) is (30) \t ', max(20, 30), 'TEST SUCCEEDED')
  console.log('Expected output of maxThree(20, 50, 11) is (50) \t ', maxThree(20, 50, 11), 'TEST SUCCEEDED')
  console.log('Expected output of maxThree(55, 4, 44) is (55) \t ', maxThree(55, 4, 44), 'TEST SUCCEEDED')
  console.log('Expected output of string "a" isVowel("a") is true \t ', isVowel("a"), 'TEST SUCCEEDED')
  console.log('Expected output of string "b" isVowel("a") is false \t ', isVowel("b"), 'TEST SUCCEEDED b is not vowel')
  console.log('Expected output of sum([1,2,3,4]) is 10 \t ', sum([1, 2, 3, 4]), 'TEST SUCCEEDED')
  console.log('Expected output of multiply([1,2,3,4]) is (24) \t ', multiply([1, 2, 3, 4]), 'TEST SUCCEEDED')
  console.log('Expected output of reverse("testing") is gnitset \t ', reverse("testing"), 'TEST SUCCEEDED')
  console.log('Expected output of findLongestWord(["act", "me", "him", "testing"]) is (7) \t ', findLongestWord(["act", "me", "him", "testing"]), 'TEST SUCCEEDED')
  console.log('Expected output of filterLongWords(["act", "me", "hard", "poll"]) is (["hard", "poll"]) \t ', filterLongWords(["act", "me", "hard", "poll"], 3), 'TEST SUCCEEDED')
}

testFunctions();


const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, arr) {
  return elem * 10;
});

console.log("All Elements multiplied by 10", b);
const c = a.filter(function (elem, i, arr) {
  return elem === 3;
});

console.log("All Elements equal 3", c);
const d = a.reduce(function (prevValue, elem, i, arr) {
  return prevValue * elem;
});
console.log("Product of all Elements.", d);

// const d2 = a.find(function (elem) { return elem > 1; }); //3
// const d3 = a.findIndex(function (elem) { return elem > 1; }); //1
// console.log(d2);
// console.log(d3);
