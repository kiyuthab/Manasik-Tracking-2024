class User {
  SaveToken(data) {
    localStorage.setItem("token", data);
  }

  SaveAccessToken(data) {
    localStorage.setItem("accessToken", data);
  }

  SaveRole(data) {
    localStorage.setItem("role", data);
  }

  Logout() {
    localStorage.clear();
  }
}
export default new User();
