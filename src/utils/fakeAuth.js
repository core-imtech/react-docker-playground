export const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const getRole = () => {
    return localStorage.getItem("role");
};

export const getAuth = () => {
    return {
        isAuthenticated: isAuthenticated(),
        token: getToken(),
        role: getRole(),
    };
};

const getRandomString = () => {
    const randomStr = Math.random().toString(36).substring(2, 19);
    return randomStr;
};

export const LoginAccount = ({ role = "admin" }) => {
    localStorage.setItem("token", getRandomString());
    localStorage.setItem("role", role);
};

export const LogoutAccount = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
};
