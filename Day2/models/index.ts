import { User, Admin, Product } from "./models";
import AuthService from "./services/AuthService";
import { SimpleAuthService } from "./services/SimpleAuthService";

// Tworzenie użytkowników
const user1 = new User(1, "Wiktoria", "wiktoria@example.com", "1234");
const admin1 = new Admin(2, "Admin Ola", "admin@example.com", "admin123", [
  "read",
  "write",
  "delete",
]);

// Tworzenie produktu
const product1 = new Product("Laptop", 4999);

// Użycie AuthService
const authService: AuthService = new SimpleAuthService();

console.log("Login user1:", authService.login(user1.email, "1234"));
console.log("Login admin1:", authService.login(admin1.email, "admin123"));

authService.logout();

// Sprawdzenie uprawnień admina
console.log("Admin has delete permission:", admin1.hasPermission("delete"));

console.log("Admin has execute permission:", admin1.hasPermission("execute"));

// Użycie namespace Utils
console.log("Formatted date:", Utils.formatDate(new Date()));
console.log("Random ID:", Utils.generateRandomId());
