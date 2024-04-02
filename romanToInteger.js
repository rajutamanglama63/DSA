const romanToInt = (romanNum) => {
    const intValOfRoman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }


    let result = 0;

    for (let i = 0; i < romanNum.length; i++) {
        const curr = intValOfRoman[romanNum[i]];
        const next = intValOfRoman[romanNum[i + 1]];

        if (curr < next) {
            result += next - curr;
            i++;
        } else {
            result += curr;
        }
    }

    return result;
}

console.log(romanToInt("IV"));