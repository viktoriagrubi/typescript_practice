import AuthService from "./AuthService";

export class SimpleAuthService extends AuthService {
  login(email: string, password: string): boolean {
    return email === "user@example.com" && password === "password123";
  }
}
