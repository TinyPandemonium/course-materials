function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i])
        i++
      } else {
        results.push(arr2[j]);
        j++
      }
    }
  
    // Only ONE of these while loops will run.
    // If i broke the top while loop, j will run.
    // If j broke the top while loop, i will run.
    // Dealing with leftovers for arr1
    while (i < arr1.length) {
      results.push(arr1[i])
      i++
    }
    // Dealing with leftovers for arr2
    while (j < arr2.length) {
      results.push(arr2[j])
      j++
    }
    return results;
  }

// Attacking this with RECURSION.
function mergeSort(arr) {
    // base case
    // We stop trying to split when we have an array of length 0 or 1.
    if (arr.length <= 1) {
      return arr // We don't need to split it any further.
    }
    // typical case
    // arr has 2 or more elements, split it into two new arrays. Using slice to help.
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid) // 0 to mid
    const right = arr.slice(mid) // mid to end
    return merge(left, right);
  }
  
  console.log(mergeSort([43, 232, 24, 42, 5, 43]))


  

  // WINNER WINNER CHICKEN DINNER
// Test this to see if our merge algo works.
// console.log(merge([5, 8, 8, 8, 8, 20, 21], [1, 3, 6, 7, 7, 7, 7, 7]))

  