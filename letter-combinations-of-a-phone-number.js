function letterCombinations(digits) {
    if (digits.length === 0) return [];

    const numToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const combinations = [];

    function backtrack(index, currentCombination) {
        if (index === digits.length) {
            combinations.push(currentCombination);
            return;
        }

        const letters = numToLetters[digits[index]];

        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, currentCombination + letters[i]);
        }
    }

    backtrack(0, '');

    return combinations;
}

