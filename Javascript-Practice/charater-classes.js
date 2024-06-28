function findCharacterClasses(pattern, str) {
    const regex = new RegExp(pattern, 'g');
    const matches = str.match(regex);
    return matches || [];
}

const testCases = [
    { description: "Digits", pattern: '\\d', string: 'Hello 123 World!', expected: ['1', '2', '3'] },
    { description: "Uppercase letters", pattern: '[A-Z]', string: 'Hello 123 World!', expected: ['H', 'W'] },
    { description: "Lowercase letters", pattern: '[a-z]', string: 'Hello 123 World!', expected: ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd'] },
    { description: "Special characters", pattern: '[^a-zA-Z0-9\\s]', string: 'Hello@123#World!', expected: ['@', '#', '!'] },
    { description: "Whitespace characters", pattern: '\\s', string: 'Hello 123 World!', expected: [' ', ' '] },
    { description: "Hexadecimal characters", pattern: '[0-9a-fA-F]', string: '1a 2F 3g', expected: ['1', 'a', '2', 'F', '3'] }
];

function runTests() {
    testCases.forEach(({ description, pattern, string, expected }, index) => {
        const result = findCharacterClasses(pattern, string);
        console.log(`Test case ${index + 1}: ${description}`);
        console.log(`Pattern: /${pattern}/, String: "${string}", Expected: ${JSON.stringify(expected)}, Result: ${JSON.stringify(result)}`);
    });
}

runTests();
