interface Cookies {
  [key: string]: string;
}

class CookieService {
  static set(name: string, value: string, days = 7): void {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value || '')}; expires=${expires}; path=/`;
  }

  static get(name: string): string | null {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length));
      }
    }
    return null;
  }

  static remove(name: string): void {
    this.set(name, '', -1);
  }

  static clear(name?: string): void {
    if (name) {
      this.remove(name);
    } else {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const eqPos = cookie.indexOf('=');
        const cookieName = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
        this.remove(cookieName);
      }
    }
  }

  static getAll(): Cookies {
    const cookies: Cookies = {};
    const all = document.cookie;
    if (all === '') return cookies;
    const list = all.split(';');
    for (const item of list) {
      const cookie = item.trim();
      const p = cookie.indexOf('=');
      if (p === -1) continue;
      const name = cookie.substring(0, p);
      const value = cookie.substring(p + 1);
      cookies[name] = decodeURIComponent(value);
    }
    return cookies;
  }
}

export default CookieService;

