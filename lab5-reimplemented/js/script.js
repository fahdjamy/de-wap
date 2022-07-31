function sum(arr = []) {
  return arr.reduce(function (prevVal, curVal) {
    return prevVal + curVal;
  });
}

function multiply(arr = []) {
  return arr.reduce(function (prevVal, curVal) {
    return prevVal * curVal;
  }, 1);
}

function filterLongWords(words = [], i) {
  return words.filter(function (word) {
    return word.length > i;
  });
}

function reverse(str = '') {
  const result = str.split('').map((_, i, arr) => {
    return arr[arr.length - 1 - i]
  });

  return result.join("");
}

console.log("\t\t\t Lab 5 re - implemented");


function testFunctions() {
  console.assert(sum([1, 2, 3, 4]) === 10, "Expected output of sum([1,2,3,4]) is 10");
  console.log('Expected output of sum([1,2,3,4]) is 10 \t ', sum([1, 2, 3, 4]), 'TEST SUCCEEDED');

  console.assert(multiply([1, 2, 3, 4]) === 24, "Expected output of multiply([1,2,3,4]) is 24");
  console.log('Expected output of multiply([1,2,3,4]) is 24 \t ', multiply([1, 2, 3, 4]), 'TEST SUCCEEDED');

  console.assert(reverse("testing") === "gnitset", "Expected output of reverse('testing')", 'TEST SUCCEEDED');
  console.log('Expected output of reverse("testing") is gnitset \t ', reverse("testing"), 'TEST SUCCEEDED');

  console.log('Expected output of filterLongWords(["act", "me", "hard", "poll"]) is (["hard", "poll"]) \t ', filterLongWords(["act", "me", "hard", "poll"], 3), 'TEST SUCCEEDED');
  const expected = ["hard", "poll"];
  const filteredArr = filterLongWords(["act", "me", "hard", "poll"], 3);
  console.assert(
    filteredArr.length === expected.length && filteredArr.every(function (value, index) { return value === expected[index]; }),
    'Expected output of filterLongWords(["act", "me", "hard", "poll"]) is (["hard", "poll"]) \t'
  );
}

testFunctions();

// function resolveAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 5000);
//   });
// }

// async function f1() {
//   const x = await resolveAfter2Seconds(10);
//   console.log(x); // 10
// }

// f1();
