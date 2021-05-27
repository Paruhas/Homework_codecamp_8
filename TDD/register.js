const db = require('./db')

const data = db()

// console.log(data);

const english = /^[A-Za-z0-9]*$/;
const englishUpperCase = /^[A-Z]*$/;

function register(username, password, confirmPassword, name) {
    const usernameTrim = username.trim(); // ตัดช่องว่างหน้าหลังออก Username
    const searchSpaceUsername = usernameTrim.search(" ");// หาช่องว่างระหว่างคำ Username
    
    const passwordTrim = password.trim(); // ตัดช่องว่างหน้าหลังออก password
    const searchSpacePassword = passwordTrim.search(" ");// หาช่องว่างระหว่างคำ password

    const nameTrim = name.trim(); // ตัดช่องว่างหน้าหลังออก name

    if (usernameTrim === "" || passwordTrim === "" || nameTrim === "") return false;
    if (!(english.test(username))) return false;
    if (searchSpaceUsername !== -1 || searchSpacePassword !== -1) return false;
    if (usernameTrim.length > 16 || passwordTrim > 16 ) return false;
    if (usernameTrim.length < 4 || passwordTrim < 4 ) return false;

    for ( i = 0 ; i < usernameTrim.length ; i++) {
        if (englishUpperCase.test(usernameTrim[i])) return false
    }

    [findUser] = data.filter(item => item.username === username);
    if(findUser) return false;

    if (password !== confirmPassword) return false;

    searchSpaceName = nameTrim.indexOf(" ");
    searchSpaceName2 = nameTrim.indexOf(" ",(searchSpaceName +1));
    if (searchSpaceName2 !== -1) return false;

    return true
};

module.exports = register;