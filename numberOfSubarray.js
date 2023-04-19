function numberSubarrayLessThanK(nums, k) {
  if (k <= 1) {
    return 0
  }

  let ans = 0, left = 0, curr = 1

  for (let right = 0; right < nums.length; right++) {
    curr *= nums[right]
    
    while (curr >= k) {
      curr /= nums[left]
      left++
    }
    ans += right - left + 1
  }
  return ans
}

const nums = [10, 5, 2, 6]
const k = 100

console.log(numberSubarrayLessThanK(nums, k))