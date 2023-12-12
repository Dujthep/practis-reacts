export class AuthService {
  static getCurrentUser() {
    return localStorage.getItem('user');
  }
  static setCurrenUser() {
    localStorage.setItem('user', 'Stop');
  }
  static checkAuth() {
    return !!this.getCurrentUser();
  }
}
