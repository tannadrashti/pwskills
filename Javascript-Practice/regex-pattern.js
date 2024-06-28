function matchRegex(pattern, str) {
    
    const regex = new RegExp(pattern);
   
    return regex.test(str);
}

const testCases = [
    { pattern: 'hello', string: 'hello world', expected: true },
    { pattern: 'world$', string: 'hello world', expected: true },
    { pattern: '^hello', string: 'hello world', expected: true },
    { pattern: '\\d+', string: '123abc', expected: true },
    { pattern: '\\d+', string: 'abc', expected: false },
    { pattern: '[a-z]', string: 'ABC', expected: false },
];

function runTests() {
    testCases.forEach(({ pattern, string, expected }, index) => {
        const result = matchRegex(pattern, string);
        console.log(`Test case ${index + 1}: Pattern: /${pattern}/, String: "${string}", Expected: ${expected}, Result: ${result}`);
    });
}

runTests();
