var longestPalindrome = function(s) {
    const frequencyMap = new Map();
    
    for (const char of s) {
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        } else {
            frequencyMap.set(char, 1);
        }
    }
    
    let oddCount = 0;
    let evenCount = 0;
    
    for (const count of frequencyMap.values()) {
        if (count % 2 === 0) {
            evenCount += count;
        } else {
            oddCount += count - 1;
        }
    }
    const length = evenCount + (oddCount > 0 ? 1 : 0);
    
    return length;
};
