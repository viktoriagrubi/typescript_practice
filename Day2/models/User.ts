export default class User {
  public id: number;
  public name: string;
  public email: string;
  protected password: string;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public checkPassword(password: string): boolean {
    return this.password === password;
  }

  getEmailDomain(): string {
    const parts = this.email.split("@");
    return parts.length > 1 ? parts[1] : "";
  }
}
