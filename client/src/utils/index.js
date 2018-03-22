export function getLoggedUserToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return user.token;
    }
    return null;
}

export function getLoggedUser() {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
        return loggedUser.user;
    }
    return null;
}