var reverseString = function(s) {
  let i = 0, j = s.length-1
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]]
      i++
      j--
  }
  return s
};


// Better solution
function reverseString2(s) {
  const midPoint = Math.floor((s.length - 1)/2)
  for (let i = 0; i < midPoint; i++) {
    // temp starts from the end and moves to the front as i increases
    let temp = s[s.length - 1 - i] 
    s[s.length - 1 - i] = s[i]
    s[i] = temp
  }
  return s
}
console.log(reverseString2(['H', 'a', 'n', 'n', 'a', 'h']))