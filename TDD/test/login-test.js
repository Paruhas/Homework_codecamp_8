const login = require('../login')

test('if username and password are correct, return true', () => {
    expect(login("test","test")).toBe(true);
})

test('if password are wrong, return false', () => {
    expect(login("test","xxxx")).toBe(false);
})

test('if password is empty, return false', () => {
    expect(login("test","")).toBe(false);
})

test('if username is empty, return false', () => {
    expect(login("","test")).toBe(false);
})

test('if username is wrong, return false', () => {
    expect(login("aaaa","test")).toBe(false);
})