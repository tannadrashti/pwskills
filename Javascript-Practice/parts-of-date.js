function extractWithGroups(pattern, str) {
    const regex = new RegExp(pattern);
    const match = regex.exec(str);

    if (match) {
        const groups = match.slice(1); 
        return {
            matched: true,
            groups: groups
        };
    } else {
        return {
            matched: false,
            groups: []
        };
    }
}

const testCases = [
    { 
        description: "Extract date parts (DD-MM-YYYY)", 
        pattern: '(\\d{2})-(\\d{2})-(\\d{4})', 
        string: 'The event is on 23-07-2021.', 
        expected: ['23', '07', '2021'] 
    },
    { 
        description: "Extract date parts (YYYY/MM/DD)", 
        pattern: '(\\d{4})/(\\d{2})/(\\d{2})', 
        string: 'The document was created on 2021/07/23.', 
        expected: ['2021', '07', '23'] 
    },
    { 
        description: "Extract parts from a complex date format", 
        pattern: '(\\d{2})\\s([a-zA-Z]+)\\s(\\d{4})', 
        string: 'We have a meeting on 23 July 2021.', 
        expected: ['23', 'July', '2021'] 
    },
    { 
        description: "No match for an incorrect pattern", 
        pattern: '(\\d{2})-(\\d{2})-(\\d{4})', 
        string: 'Incorrect date format 23/07/2021.', 
        expected: [] 
    },
    { 
        description: "Extract mixed date parts", 
        pattern: '(\\d{4})-([a-zA-Z]+)-(\\d{2})', 
        string: 'Date in log: 2021-July-23.', 
        expected: ['2021', 'July', '23'] 
    }
];

function runTests() {
    testCases.forEach(({ description, pattern, string, expected }, index) => {
        const result = extractWithGroups(pattern, string);
        console.log(`Test case ${index + 1}: ${description}`);
        console.log(`Pattern: /${pattern}/, String: "${string}", Expected Groups: ${JSON.stringify(expected)}, Matched: ${result.matched}, Extracted Groups: ${JSON.stringify(result.groups)}`);
    });
}

runTests();
