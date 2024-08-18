function pairNumbers(startNumber, endNumber) {
  let pairNumbers = []
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 === 0) {
      pairNumbers.push(i)
    }
  }
  return pairNumbers.join(',')
}

export default pairNumbers
