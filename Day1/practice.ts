// deklaracja zmiennych:

let name: string = "Wiktoria";
let age: number = 25;
let isActive: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// any vs. unknown:

//any

let anyValue: any = "This can be anything";
let anyValue2: any = 42;
let anyValue3: any = { name: "Object" };

//unknown

let unknownValue: unknown = "This can also be anything";

function processUnknown(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log("Not a string");
  }
}

//void vs. never:

function logMessage(message: string): void {
  console.log(message);
}

function throwError(message: string): never {
  throw new Error(message);
}

// typy złożone:

let numbers: number[] = [1, 2, 3, 4, 5];

let names: string[] = ["Wika", "Ola"];

let user: [id: number, name: string, isActive: boolean];

user = [1, "Wiktoria", true];

let Product: {
  id: number;
  name: string;
  price: number;
};

// funkcje:

function add(a: number, b: number): number {
  return a + b;
}

function formatName(firstName: string, lastName: string): string {
  return `${lastName.toUpperCase()} ${firstName}`;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

//funkcja z obiektem:

interface User {
  name: string;
  email: string;
  age: number;
}

function printUser(user: User): void {
  console.log(`Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
}

// interfejsy:

interface User {
  id: number;
  name: string;
  email: string;
}

let user1: User = {
  id: 1,
  name: "Wiktoria",
  email: "wiktoria@example.com",
};

// pola opcjonalne:

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  isAdmin?: boolean;
}

// funkcja tworząca użytkownika
let nextId = 1;
function createUser(
  name: string,
  email: string,
  age?: number,
  isAdmin?: boolean,
): User {
  return {
    id: nextId++,
    name,
    email,
    age,
    isAdmin,
  };
}

// rozszerzanie interfejsów:

interface Admin extends User {
  permissions: string[];
}

let admin1: Admin = {
  id: 1,
  name: "Wiktoria",
  email: "wiktoria@example.com",
  permissions: ["read", "write", "delete"],
};

// unie:

type Status = "loading" | "success" | "error";

type ApiResponse<T> = 
    | {data: T error?: never}
    | {data?: never error: string};

const successResponse: ApiResponse<number> = { data: 100 };
const errorResponse: ApiResponse<number> = { error: "Something went wrong" };

//przecięcia:

interface User {
  id: number;
  name: string;
  email: string;
}

interface Timestamped {
  createdAt: Date;
}

type UserWithTimestamp = User & Timestamped;

const user: UserWithTimestamp = {
  id: 1,
  name: "Wiktoria",
  email: "wiktoria@example.com",
  createdAt: new Date(),
};

//enumy:

enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST",
}

function getPermissions(role: UserRole): string[] {
    switch(role) {
        case UserRole.ADMIN:
            return ["read", "write", "delete"];
        case UserRole.USER:
            return ["read", "write"];
        case UserRole.GUEST:
            return ["read"];
        default:
            return [];
    }
}

//generyki:

// funkcja generyczna:

function identity<T>(value: T): T {
    return value;
}   

// generyki z tablicą:

function getFirstElement<T>(arr: T[]):T {
    return arr[0];
}

// ograniczenie generyków:

function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

// generyczna klasa:    

class Storage<T> {
    private items: T[] = []; // pole przechowujące elementy

    addItem(item: T): void {
        this.items.push(item); // dodajemy element do tablicy
    }

    getAll(): T[] {
        return this.items; // zwracamy wszystkie elementy
    }
}
