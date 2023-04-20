var maxVowels = function(s, k) {
 
  function check(char) {
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o'  || char === 'u') {
          return true
      }
      return false
  }
  let count = 0, max = 0

  for (let i = 0; i < k; i++) {
      if (check(s[i])) {
          count++
      }
  }
  max = count
  for (let i = k; i < s.length; i++) {
      if (check(s[i])) {
          count++
      }
      if (check(s[i - k])) {
          count--
      }
      max = Math.max(max, count)
  }
  
  return max
};