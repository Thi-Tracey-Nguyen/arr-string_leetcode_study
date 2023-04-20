var equalSubstring = function(s, t, maxCost) {
  let maxLength = 0, cost = 0, left = 0, length = 0

  for (let right = 0; right < s.length; right++) {

      cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right))

      while (cost > maxCost) {
          cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
          left++
      }

      length = Math.max(length, right - left + 1)
  }
  return length
};