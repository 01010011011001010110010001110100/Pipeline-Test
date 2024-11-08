
const greet = require('./src/js/index');

test('Greet say (HelloWorld!)', () => {
    expect(greet()).toBe("HelloWorld!");
})