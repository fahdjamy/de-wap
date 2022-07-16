//////// Exercise 1. ////////////
console.log("||||||||||||||||| Exercise 1. |||||||||||||||||");
function filterBannedWords(string, bannedWords) {
  let result = [];
  let strs = string.split(" ");

  for (let str of strs) {
    if (!bannedWords.includes(str)) {
      result.push(str);
    }
  }

  return result.join(" ");
}

console.log("filter banned words: = \t", filterBannedWords("This house is not nice!", ["not"]));

//////// Exercise 2. ////////////
console.log("||||||||||||||||| Exercise 2. |||||||||||||||||");
function bubbleSort(nums) {
  // Make sure the variable is not null or undefined.
  if (nums === undefined || nums === null || nums.length <= 1) {
    return nums;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

console.log("Bubble sort: ", bubbleSort([6, 4, 0, 3, -2, 1]));


//////// Exercise 3. ////////////
console.log("||||||||||||||||| Exercise 3. |||||||||||||||||");

function Person(name) {
  this.name = name;
}

const teacher = new Person("Joe");

Person.prototype.teach = function (subject) {
  console.log(`[${this.name}]` + " is now teaching " + `[${subject}]`);
}

teacher.teach("Web Application Programming");

let PersonObj = {
  name: "",
  setName: function (name) {
    this.name = name;
  },
  teach: function (subject) {
    console.log(`[${this.name}]` + " is now teaching " + `[${subject}]`);
  }
};

let teacher2 = Object.create(PersonObj);
teacher2.setName("Joe Johns");
teacher2.teach("WAP");


//////// Exercise 4. ////////////
console.log("||||||||||||||||| Exercise 4. |||||||||||||||||");
console.log("\t\t\t using prototype");

function person(name, age) {
  this.age = age;
  this.name = name;
}

person.prototype.greeting = function () {
  console.log(`Greetings, my name is [${this.name}] and I am [${this.age}] years old`)
}

person.prototype.salute = function () {
  console.log("Good morning!, and in case I dont see you good afternoon, good evening and good night!")
}

function Student(name, age, major) {
  this.age = age;
  this.name = name;
  this.major = major;
}

Object.setPrototypeOf(Student.prototype, person.prototype);

Student.prototype.greeting = function () {
  console.log(`Hey my name is [${this.name}], and I am studying [${this.major}]`);
}

function Professor(name, age, department) {
  this.age = age;
  this.name = name;
  this.department = department;
}

Object.setPrototypeOf(Professor.prototype, person.prototype);

Professor.prototype.salute = function () {
  console.log(`Good day, my name is [${this.name}] and I am in the [${this.department}] department`);
}

const student = new Student("Jimmy", 20, "Computer Science");
const professor = new Professor("Johns", 45, "MSC Science");

console.log("\t student");
student.greeting();
student.salute();
console.log("\t professor");
professor.salute();
professor.greeting();

console.log("\t\t\t using function constructor");

const personObj = {
  age: 0,
  name: "",
  setAge: function (age) {
    this.age = age;
  },
  setName: function (name) {
    this.name = name;
  },
  greeting: function () {
    console.log(`Hey my name is [${this.name}], and I am studying [${this.major}]`);
  },
  salute: function () {
    console.log("Good morning!, and in case I dont see you good afternoon, good evening and good night!")
  }
}

const studentObj = {
  __proto__: personObj.prototype,
  major: "",
  setMajor: function (major) {
    this.major = major;
  },
  greeting: function () {
    console.log(`Hey my name is [${this.name}], and I am studying [${this.major}]`);
  }
};

let student2 = Object.create(studentObj);

const professorObj = {
  __proto__: personObj.prototype,
  department: "",
  setDepartment: function (department) {
    this.department = department;
  },
  salute: function () {
    console.log(`Good day, my name is [${this.name}] and I am in the [${this.department}] department`);
  }
};

let professor2 = Object.create(studentObj);

console.log("\t student");
student.greeting();
student.salute();
console.log("\t professor");
professor.salute();
professor.greeting();

