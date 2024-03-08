var findSubsequences = function (nums) {
    function recursiveHelper(arr, idx) {
        if (idx === nums.length) {
            return;
        }

        if (arr.length >= 2) {
            let key = `${arr}`;
            if (!(key in hashTable)) {
                hashTable[key] = true;
                ans.push(arr);
            }
        }

        for (let j = idx + 1; j < nums.length; j++) {
            if (nums[j] >= arr[arr.length - 1]) {
                arr.push(nums[j]);
                recursiveHelper([...arr], j);
                arr.pop();
            }
        }
    }

    let hashTable = {};
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        recursiveHelper([nums[i]], i);
    }

    return ans;
};
