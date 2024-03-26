const intersectionOfTwoArr = (arr1, arr2) => {
    return arr1.filter(element => arr2.includes(element))
}

console.log(intersectionOfTwoArr([1, 3, 1], [1, 1]))