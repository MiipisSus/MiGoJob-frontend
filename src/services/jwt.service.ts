const TOKEN_KEY = "access_token";

const JwtService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
  setToken(token: string) {
    return localStorage.setItem(TOKEN_KEY, token);
  },
  destroyToken() {
    return localStorage.removeItem(TOKEN_KEY);
  },
};

export default JwtService;
