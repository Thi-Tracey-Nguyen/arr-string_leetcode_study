function prefixSum(nums, queries, target) {
  let prefix = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1])
  }
  let ans = []
  for (const [x,y] of queries) {
    let curr = prefix[y] - prefix[x] + nums[x]
    ans.push(curr < limit)
   }
  return ans
}

const nums = [1, 6, 3, 2, 7, 2]
const queries = [[0, 3], [2, 5], [2, 4]]
const limit = 13

console.log(prefixSum(nums, queries, limit))

function numOfWaysToSplit(arr) {
  let prefix = [nums[0]], ans = 0

  for (let i = 1; i < arr.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1])
  }

  for (let i = 0; i < prefix.length - 1; i++) {
    let curr = prefix[prefix.length - 1] - prefix[i]

    if (prefix[i] >= curr) {
      ans++
    }
  }
  return ans
}

const arr = [10, 4, -8, 7]
console.log(numOfWaysToSplit(arr))

function anotherWay(nums) {
  let ans = 0, leftSection = 0, total = 0

  for (const num of nums) {
    total += num
  }

  for (let i = 0; i < nums.length - 1; i++) {
    leftSection += nums[i]
    let rightSection = total - leftSection

    if (leftSection >= rightSection) {
      ans++
    }
  }
  return ans

}

console.log(anotherWay(arr))