// converting into string

// const isPalindrome = (num) => {
//     let strNum = num.toString();
//     let left = 0;
//     let right = strNum.length - 1;

//     while (left < right) {
//         if (strNum[left] !== strNum[right]) {
//             return false
//         }

//         left++;
//         right--;
//     }

//     return true;
// }

const isPalindrome = (num) => {
    if (num < 0) {
        return false;
    }

    if (num % 10 === 0 && num !== 0) {
        return false;
    }

    let reversedNum = 0;
    let originalNum = num;
    let digit = 0

    while (num > 0) {
        digit = num % 10;
        reversedNum = (reversedNum * 10) + digit;

        num = Math.floor(num / 10);
    }

    if (originalNum === reversedNum) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome(10))