function canConstruct(ransomNote, magazine) {
  // Create a map to store the character counts in the magazine.
  const magazineMap = new Map();
  for (const char of magazine) {
    if (magazineMap.has(char)) {
      magazineMap.set(char, magazineMap.get(char) + 1);
    } else {
      magazineMap.set(char, 1);
    }
  }

  // Iterate over the ransom note and check if each character exists in the magazine map and has a sufficient count.
  for (const char of ransomNote) {
    if (!magazineMap.has(char) || magazineMap.get(char) === 0) {
      return false;
    }

    // Decrement the count of the character in the magazine map.
    magazineMap.set(char, magazineMap.get(char) - 1);
  }

  // If we reach here, then the ransom note can be constructed from the magazine.
  return true;
}
