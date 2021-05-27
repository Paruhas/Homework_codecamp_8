const db = require('./db')

const data = db()

// console.log(data);

function login(username, password) {
    if ((username.trim()) === "") return false

    // console.log(username);

    choseUser = data.filter(item => item.username === username ? item : 0 );

    // console.log(choseUser);
    // console.log(Boolean(choseUser));
    
    if (!choseUser) return false;
    const [selectUser] = choseUser;
    if (!selectUser) return false;

    // console.log(selectUser);

    if ( selectUser.username === username && selectUser.password === password ) return true;
    if ( selectUser.username === username && selectUser.password !== password ) return false;

    
}

module.exports = login;