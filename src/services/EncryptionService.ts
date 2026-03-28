interface CryptoOptions {
  key?: string;
  ivLength?: number;
}

class EncryptionService {
  private static key = 'coBuddy-frontend-secret-key-32bytes-long!!'; // 32 bytes for AES-256

  /**
   * Universal encrypt method - handles string, number, boolean, object, array
   */
  static async encrypt(data: any, options: CryptoOptions = {}): Promise<string> {
    try {
      const encoder = new TextEncoder();
      let textToEncrypt: string;

      // Handle different data types
      if (typeof data === 'string') {
        textToEncrypt = data;
      } else if (typeof data === 'number' || typeof data === 'boolean') {
        textToEncrypt = data.toString();
      } else if (data === null || data === undefined) {
        textToEncrypt = '';
      } else {
        // Object/Array -> JSON
        textToEncrypt = JSON.stringify(data);
      }

      const dataBytes = encoder.encode(textToEncrypt);
      
      const iv = window.crypto.getRandomValues(new Uint8Array(options.ivLength || 12));
      const keyData = encoder.encode((options.key || this.key).padEnd(32, '0'));
      const cryptoKey = await window.crypto.subtle.importKey(
        'raw', 
        keyData, 
        'AES-GCM', 
        false, 
        ['encrypt']
      );
      
      const encrypted = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        cryptoKey,
        dataBytes
      );
      
      // Combine IV + encrypted data
      const combined = new Uint8Array(iv.length + encrypted.byteLength);
      combined.set(iv);
      combined.set(new Uint8Array(encrypted), iv.length);
      
      return btoa(String.fromCharCode(...combined));
    } catch (error) {
      console.error('Encryption failed:', error);
      throw error;
    }
  }

  /**
   * Universal decrypt method - handles any encrypted string back to original type
   */
  static async decrypt<T = any>(encryptedData: string, options: CryptoOptions = {}): Promise<T | null> {
    try {
      const keyData = new TextEncoder().encode((options.key || this.key).padEnd(32, '0'));
      const cryptoKey = await window.crypto.subtle.importKey(
        'raw', 
        keyData, 
        'AES-GCM', 
        false, 
        ['decrypt']
      );
      
      const binaryData = atob(encryptedData);
      const binaryArray = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        binaryArray[i] = binaryData.charCodeAt(i);
      }
      
      const iv = binaryArray.slice(0, 12);
      const data = binaryArray.slice(12);
      
      const decryptedBytes = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        cryptoKey,
        data
      );
      
      const decryptedString = new TextDecoder().decode(decryptedBytes);
      
      // Auto-detect original type
      try {
        // Try parsing as JSON first (object/array)
        return JSON.parse(decryptedString) as T;
      } catch {
        // Try boolean
        if (decryptedString === 'true') return true as T;
        if (decryptedString === 'false') return false as T;
        
        // Try number
        const num = parseFloat(decryptedString);
        if (!isNaN(num)) return num as T;
        
        // Default to string
        return decryptedString as T;
      }
    } catch (error) {
      console.error('Decryption failed:', error);
      return null;
    }
  }

  /**
   * Simple Base64 for non-sensitive data
   */
  static base64Encode(data: any): string {
    const str = typeof data === 'string' ? data : JSON.stringify(data);
    return btoa(str);
  }

  static base64Decode<T = any>(encoded: string): T {
    try {
      const str = atob(encoded);
      return JSON.parse(str) as T || str as T;
    } catch {
      return atob(encoded) as T;
    }
  }
}

export default EncryptionService;

