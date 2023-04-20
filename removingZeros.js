var moveZeroes = function(nums) {
  let count = 0, left = 0

  for (let right = 0; right < nums.length; right++) {
    if (nums[right]) {
      let temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
    } 
  }
  return nums
};

const nums = [1, 0, 1]

console.log(moveZeroes(nums))