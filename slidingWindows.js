function slidingWindows(nums, target) {
  let curr = 0, ans = 0, left = 0
  for (let right = 0; right < nums.length; right++) {
    curr += nums[right] 
    while (curr > target) {
      curr -= nums[left]
      left++
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}

const nums = [3, 1, 2, 7, 4, 2, 1, 1, 5]
const target = 8

console.log(slidingWindows(nums, target))

function slidingWindows2(nums) {
  let left = 0, ans = 0, curr = 0
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === '0') {
      curr++
    }

    while (curr > 1) {
      if (nums[left] === '0') {
        curr--
      }
      left++
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}

console.log(slidingWindows2('11001011'))
