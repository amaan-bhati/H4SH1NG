
var intToRoman = function (num) {
    var symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    var roman = '';
    var i = 0;

    while (num > 0) {
        if (num >= values[i]) {
            num -= values[i];
            roman += symbols[i];
        } else {
            i++;
        }
    }

    return roman;
};
