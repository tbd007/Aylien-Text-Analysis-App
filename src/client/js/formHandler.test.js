const formHandler = require('./formHandler');

test('text is entered', () => {
    expect(formHandler('Good job!')).toBe("Valid input: Good job!");
});

