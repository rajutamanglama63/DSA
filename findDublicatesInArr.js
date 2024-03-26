const findDublicates = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let index = Math.abs(arr[i]) - 1;

        // if the number is already in negetive we are encountering it twice
        if (arr[index] < 0) {
            result.push(index + 1)
        }

        arr[index] = arr[index] * -1;
    }

    return result;
}

console.log(findDublicates([5, 4, 2, 6, 2, 4, 1, 6, 9, 8, 12, 12]))