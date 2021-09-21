// Using the countries array create the following array of arrays.
// The country name, the first three letters of the country name and the length of the country name.

const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
const countryCodes = [];
countries.forEach((element) =>
  countryCodes.push(element.split("", 3).join(""))
);
// console.log(countryCodes)

const lengthOfName = [];
countries.forEach((element) => lengthOfName.push(element.length));
// console.log(lengthOfName)

const newArr = []
for (var i = 0; i < countries.length; i++){
  newArr.push(countries[i], countryCodes[i], lengthOfName[i])
}

console.log(newArr)