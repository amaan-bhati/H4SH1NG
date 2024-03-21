var findMaxLength = function (nums) {
    var sumMap = new Map();
    let maxSubArrayLength = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (sum === 0) {
            maxSubArrayLength = i + 1;
        }
        else if (sumMap.has(sum)) {
            maxSubArrayLength = Math.max(maxSubArrayLength, i - sumMap.get(sum));
        }
        else {
            sumMap.set(sum, i);

        }
    }
return maxSubArrayLength;
};
