var isHappy = function (n) {
    function getNextNumber(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let slow = n;
    let fast = n;

    do {
        slow = getNextNumber(slow);
        fast = getNextNumber(getNextNumber(fast));
    } while (slow !== fast);

    return slow === 1;
}
