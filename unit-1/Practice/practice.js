// const humans = ["Human1", "Human2", "Human3", "Human4"];

// humans.forEach(function(human) {
//     console.log(human.toLowerCase())
// })

// const nums = [1, 2, 3];
// const squared = nums.map( x => x * x);
// console.log(squared)
// console.log(nums)

// const instructors = ["Evan", "Ken", "Matt", "Payne"];
// instructors.map(
//     console.log(`${instructors} is awesome`)
// )



const nums = [100, 2, 5, 42, 99];
const odds = nums.filter((num) => num % 2);
console.log(odds)
// odds -> [5, 99]


const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const noJerks = people.filter(nojerk => nojerk !== 'jerks')
console.log(noJerks)

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'black', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];
  
  const firstWhiteCar = cars.find((car) => car.color === 'white');
  // firstWhiteCar -> {color: 'white', make: 'Toyota', year: 2013}
  
  const missingCar = cars.find((car) => car.color === 'blue');
  // missingCar -> undefined

  const notTooOldCar = cars.find((car) => car.year < 2014);

  console.log(notTooOldCar)

    const myRoom = ["evil monkey", "bed", "lamp"];
    const isEvilMonkeyInRoom = myRoom.some((monkey) => monkey === "evil monkey")
    console.log(isEvilMonkeyInRoom)

    const votes = ['Yes', 'No', 'No', 'Yes', 'Yes', 'Maybe', 'Maybe', 'this is more than 1 word'];
const tally = votes.reduce((acc, vote) => {
  // Assign 1 if first time seeing a certain "type" of vote
  // otherwise increase count by 1
  acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
  return acc;
}, {});  // Note the initial value is an empty object

// tally -> {"No": 2, "Yes": 3}
console.log(tally)