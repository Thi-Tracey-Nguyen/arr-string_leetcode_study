function twoSum(arr, target) {
  let left = 0, right = arr.length - 1

  while (left < right) {
    let current = arr[left] + arr[right]
    if (current === target) {
      return true
    }
    if (current > target) {
      right ++
    } else {
      left ++
    }
  }
  return false
}

console.log(twoSum([1, 2, 3, 6, 7], 23))