function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}

console.log(firstNonConsecutive([0, 1, 2, 3, 4, 6, 7, 8, 9]));
console.log(firstNonConsecutive([0, 1, 2, 3, 4, 5, 6, 7, 8]));