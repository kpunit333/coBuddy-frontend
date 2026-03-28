interface StorageItem {
  [key: string]: unknown;
}

class StorageService {
  private static sessionStorage = sessionStorage;

  // Session Storage
  static set(key: string, value: StorageItem | string): void {
    this.sessionStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  }

  static get(key: string): StorageItem | null {
    const item = this.sessionStorage.getItem(key);
    return JSON.parse(item || 'null');
  }

  static clear(key: string): void {
    this.sessionStorage.removeItem(key);
  }

  static clearAll(): void {
    this.sessionStorage.clear();
  }

}

export default StorageService;

