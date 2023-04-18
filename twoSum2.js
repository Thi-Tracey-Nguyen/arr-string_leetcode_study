function twoSum2(arr1, arr2) {
  let i = 0, j = 0, result = []

  while (i < arr1.length && j < arr1.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i])
    i++ 
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++ 
  }
  return result
}

const arr1 = [1, 3, 5, 7, 9]
const arr2 = [2, 4, 6, 8, 10]

console.log(twoSum2(arr1, arr2))