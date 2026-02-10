namespace Utils {
  export function formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  export function generateRandomId(): number {
    return Math.floor(Math.random() * 10000);
  }
}
