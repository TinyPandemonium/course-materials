// console.log('good morning')


// function recursiveCountdown(startingNum) {
//     //Base case/terminating condition
//     if (startingNum === 0) return 'WE HAVE WOKEN UP'

//     console.log(startingNum)

//     recursiveCountdown(startingNum -1)
// }

// console.log(recursiveCountdown(7));


// //Iterative approach to calculating SUM
// function calculateTotal(num) {
//     let total = 0;
//     for (let i=0; i <= num; i++) {
//       total += i;
//     }
//     return total;
//   }
//   console.log(calculateTotal(3))
  

// //recursive approach to calculatin SUM
// function calculateSumRecursive(num, total = 0) {

//     if (num === 0) return total;
//     //base case/exit condition

//     total += num

//     return calculateSumRecursive(num -1, total)
// }


// function factorial(num, total = 1) {
//     if (num === 1) return total;
//     //base case/exit condition

//     return factorial(num -1, total *= num)
// }



// console.log(factorial(10))
// console.log(factorial(5))
// console.log(factorial(7))




// Data coming from the backend, JSON...
const teamStructure = {
    name: 'Troy',
    teams: [
      {
        name: 'Eric',
        // Not sure how many teams Eric has...
        teams: [{
          name: 'Daniel Jones',
          teams: []
        }],
      }, 
      {
        name: 'Sarah Rose',
        // Not sure how many teams Sarah Rose has...
        teams: [{
          name: 'Kenjamin Button',
          teams: []
        }],
      }
    ]
  }
  
  function getTeamDetails(data) {
    // Base Case aka Terminating Condition aka Wake Up From Dream
    if (data.teams.length === 0) {
      return;
    }
    data.teams.forEach(team => {
      console.log(team.name)
      console.log(team)
    })
  }
  
  console.log(getTeamDetails(teamStructure))
  
  