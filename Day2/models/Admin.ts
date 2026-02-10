import User from "./User";

export class Admin extends User {
  public permissions: string[];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    permissions: string[],
  ) {
    super(id, name, email, password);
    this.permissions = permissions;
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }
}
