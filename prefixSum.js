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