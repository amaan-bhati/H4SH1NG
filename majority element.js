var majorityElement = function (nums) {
    let dict = {};

    nums.forEach((element) => {
        if (!dict.hasOwnProperty(element)) {
            dict[element] = 1;
        } else dict[element]++;
    });

    let keys = Object.keys(dict)
    keys.sort((a, b) => dict[b] - dict[a])
    return keys[0]
};
