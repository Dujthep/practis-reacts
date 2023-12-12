export class AuthService {
  static getCurrentUser() {
    return localStorage.getItem('user');
  }
  static setCurrenUser(user: string) {
    localStorage.setItem('user', user);
  }
  static removeUser() {
    localStorage.removeItem('user');
  }

  static checkAuth() {
    return !!this.getCurrentUser();
  }
}
