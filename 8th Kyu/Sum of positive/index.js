function positiveSum(arr) {
    return !arr.length ? 0 : arr.reduce((res, x) => x > 0 ? res + x : res, 0)
  }