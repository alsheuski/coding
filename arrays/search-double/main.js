exports.checkIfExist = (arr) => {
  for (let i = 0; i <= arr.length - 2; i++) {
    if (
      arr.indexOf(arr[i] + arr[i], i + 1) !== -1 ||
      arr.indexOf(arr[i] / 2, i + 1) !== -1
    ) {
      return true
    }
  }

  return false
}
