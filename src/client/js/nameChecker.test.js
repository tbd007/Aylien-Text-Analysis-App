const nameChecker = require('./nameChecker');

test('get name length if not undefined', () => {
    expect(nameChecker('Picard')).toBe(6);
});

