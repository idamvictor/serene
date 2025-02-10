export async function generateSecretKey() {
  const key = await window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 }, 
    true,
    ["encrypt", "decrypt"]
  );

  const exportedKey = await window.crypto.subtle.exportKey("raw", key);
  const keyArray = Array.from(new Uint8Array(exportedKey));

  const hexKey = keyArray.map((b) => b.toString(16).padStart(2, "0")).join("");

  sessionStorage.setItem("secret_key", hexKey); 
  return hexKey;
}



//encryptUser
export async function encryptUserId(userId, secretKey) {
  const encoder = new TextEncoder();
  const iv = window.crypto.getRandomValues(new Uint8Array(12)); 

 
  const keyBuffer = new Uint8Array(
    secretKey.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
  );

  const cryptoKey = await window.crypto.subtle.importKey(
    "raw",
    keyBuffer,
    { name: "AES-GCM" },
    false,
    ["encrypt"]
  );

 
  const encryptedData = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    cryptoKey,
    encoder.encode(userId)
  );

 
  const encryptedBase64 = btoa(
    String.fromCharCode(...new Uint8Array(encryptedData))
  );
  const ivBase64 = btoa(String.fromCharCode(...iv));

  localStorage.setItem(
    "encryptedUserId",
    JSON.stringify({ encryptedBase64, ivBase64 })
  );
}



//decrypt User
export async function decryptUserId(secretKey) {
  const storedData = JSON.parse(localStorage.getItem("encryptedUserId"));
  if (!storedData) return null;

  const { encryptedBase64, ivBase64 } = storedData;


  const encryptedData = Uint8Array.from(atob(encryptedBase64), (c) =>
    c.charCodeAt(0)
  );
  const iv = Uint8Array.from(atob(ivBase64), (c) => c.charCodeAt(0));

// convert to binary from hex
  const keyBuffer = new Uint8Array(
    secretKey.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
  );

  const cryptoKey = await window.crypto.subtle.importKey(
    "raw",
    keyBuffer,
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  );

  try {
    // Decrypt the stored ID
    const decryptedData = await window.crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      cryptoKey,
      encryptedData
    );

    return new TextDecoder().decode(decryptedData);
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
}