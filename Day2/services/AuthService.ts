export default abstract class AuthService {
  abstract login(email: string, password: string): boolean;
  logout(): void {
    console.log("User logged out");
  }
}
