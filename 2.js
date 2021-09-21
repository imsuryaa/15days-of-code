const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// Write a function which filter users who has scoresGreaterThan85,

const scoresGreaterThan85 = users.filter((user) => user.scores > 85);
console.log(scoresGreaterThan85);

// Write a function which addUser to the user array only if the user does not exist.

const addUser = {
  name: "Sunny",
  scores: 93,
  skills: ["NODEJS"],
  age: 29,
};

const userExists = users.some((user) => user.name === addUser.name);

if (userExists) console.log("USER ALREADY EXISTS");

users.push(addUser);

console.log(users);

// Write a function which addUserSkill which can add skill to a user only if the user exist.

const addUserSkill = (arr, name, skill) => {
  let userCheck = false;
  for (const user of arr) {
    if (user["name"] === name) {
      user.skills.push(skill);
      userCheck = true;
      break;
    }
  }
  if (!userCheck) return "USER DOES NOT EXISTS";
  return arr;
};

console.log(addUserSkill(users, "Sunny", "ANGULAR"));

// Write a function which editUser if the user exist in the users array.
const newUser = {
  name: "Aron",
  scores: 134,
  skills: ["HTML", "CSS", "JS", "REACT"],
  age: 29,
}

const editUser = (arr, name, newUser) => {
  let userCheck = false
  for (const user of arr) {
    if (user["name"] === name) {
      user.name = newUser.name
      user.scores = newUser.scores
      user.skills = newUser.skills
      user.age = newUser.age
      found = true
      break
    }
  }
  if (!userCheck) return "USER DOES NOT EXISTS"
  return arr
};
console.log(editUser(users, "Martha", newUser));
console.log(users);
