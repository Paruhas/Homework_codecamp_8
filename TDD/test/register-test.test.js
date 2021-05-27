const register = require('../register')

test('if username, password, confirmPassword and name are correct, return true', () => {
    expect(register("test3","test","test","test test")).toBe(true);
})

test('if username is " ", return false', () => {
    expect(register(" ","test","test","test test")).toBe(false);
})

test('if username is not eng, return false', () => {
    expect(register("กกกก","test","test","test test")).toBe(false);
})

test('if username has space, return false', () => {
    expect(register(" te st 3","test","test","test test")).toBe(false);
})

test('if username > than 16, return false', () => {
    expect(register("12345678911234567","test","test","test test")).toBe(false);
})

test('if username < than 4, return false', () => {
    expect(register("123","test","test","test test")).toBe(false);
})

test('if username has upperCase, return false', () => {
    expect(register("tESt3","test","test","test test")).toBe(false);
})

test('if username already in Database , return false', () => {
    expect(register("test","test","test","test test")).toBe(false);
})





test('if password is " ", return false', () => {
    expect(register("test3"," ","test","test test")).toBe(false);
})

test('if password has space, return false', () => {
    expect(register("test3","te st","test","test test")).toBe(false);
})

test('if password > than 16, return false', () => {
    expect(register("test3","12345678911234567","test","test test")).toBe(false);
})

test('if password < than 4, return false', () => {
    expect(register("test3","123","test","test test")).toBe(false);
})

test('if password !== confirmPassword, return false', () => {
    expect(register("test3","test","TEST","test test")).toBe(false);
})





test('if name more than 1 space, return false', () => {
    expect(register("test3","test","test","test test test")).toBe(false);
})




// test('if username has UpperCase, return false', () => {
//     expect(register("teSt","test","test","test test")).toBe(false);
// })


// test('if password are wrong, return false', () => {
//     expect(register("test","xxxx")).toBe(false);
// })

// test('if password is empty, return false', () => {
//     expect(register("test","")).toBe(false);
// })

// test('if username is empty, return false', () => {
//     expect(register("","test")).toBe(false);
// })

// test('if username is wrong, return false', () => {
//     expect(register("aaaa","test")).toBe(false);
// })