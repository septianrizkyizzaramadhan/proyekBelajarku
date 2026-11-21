"use strict";
function isAdmin(user) {
    return user.role === 'Admin';
}
function getUser(user) {
    if (isAdmin(user)) {
        console.log('ADMIN: ', user.username);
    }
    else {
        console.log('User: ', user.username);
    }
}
const user1 = {
    id: 1,
    username: 'revy',
    email: 'revy@genesis.dev',
    role: 'Admin'
};
getUser(user1);
