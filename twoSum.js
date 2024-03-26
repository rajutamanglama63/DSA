const twoSum = (arr, target) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i, j);
            }
        }
    }

    return result;
}

console.log(twoSum([1, 2, 3, 4, 5], 8))