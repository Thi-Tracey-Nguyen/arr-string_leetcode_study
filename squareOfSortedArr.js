var sortedSquares = function(nums) {
  const result = []
  // square the element 
  for (let i=0; i < nums.length; i++) {
      let square = nums[i] * nums[i]
      
      do {
          result.push(square)
      } while (square > result[i-1])
          
      
      // if (i > 0 && square >= result[i-1]) {
      //   result.push(square)  
      // } else if (i > 0 && square < result[i-1]) {
          let temp = result[i-1]
          result[i-1] = square
          result.push(result[i-1])
      // }
  }
  return result
      
};

const nums = [-7,-3,2,3,11]
console.log(sortedSquares(nums))