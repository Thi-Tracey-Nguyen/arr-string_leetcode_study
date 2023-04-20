var minSubArrayLen = function(target, nums) {
  let left = 0, curr = 0, length = nums.length, total = 0

  for (let right = 0; right < nums.length; right++) {
      total += nums[right] 
  }

  if (total < target) {
      return 0
  }

  for (let right = 0; right < nums.length; right++) {
      curr += nums[right]

      while (curr >= target) {
          length = Math.min(length, right - left + 1)
          curr -= nums[left]
          left++
      }
  }

  return length
};