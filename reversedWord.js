var reverseWord = function(s) {
  const arr = s.split(" ")
  console.log(arr)
  for (let j = 0; j < arr.length; j++) {
      let word = arr[j]
      let reversedWord = ''
      for (let i = word.length - 1; i >= 0; i--) {
          reversedWord = reversedWord.concat(word[i])
      }
      arr.push(reversedWord)
  }
  return arr.join('')
};

const s = 'Let it snow'

console.log(reverseWord(s))