var uniqueOccurrences = function (arr) {
    let count = 1;
    let countArr = [];

    for (let i = 0; i < arr.length;) {
        for (let j = i; j < arr.length;) {
            if (arr[i] == arr[j] & i != j) {
                count++;
                arr.splice(j, 1);
            } else j++;
        }
        countArr.push(count);
        count = 1;
        arr.splice(i, 1);
    }

    countArr.sort();

    for (let k = 0; k < countArr.length - 1; k++) {
        if (countArr[k] == countArr[k + 1]) return false;
    }
    return true;
};
