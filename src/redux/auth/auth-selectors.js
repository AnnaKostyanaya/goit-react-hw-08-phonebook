export const isUserLogin = ({auth}) => auth.isLogin;
export const getUser = ({auth}) => auth.user;
export const getAuth = ({auth}) => {
    const {isLogin, token} = auth;
    return {isLogin, token};
}
export const getError = ({auth}) => {
    if (auth.error === null) {
        return
    } else {
    return auth.error;
    }
};

export const getDetailError = ({auth}) => {
    if (auth.error === null) {
        return
    } else {
    return auth.error;
    }
};