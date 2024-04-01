var findTheDifference = function (s, t) {
    let charCodeSum = 0;

    for (let i = 0; i < s.length; i++) {
        charCodeSum += t.charCodeAt(i) - s.charCodeAt(i);
    }

    charCodeSum += t.charCodeAt(t.length - 1); // Add the code of the extra letter

    return String.fromCharCode(charCodeSum);
};
