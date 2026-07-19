export interface UserIdentity {
  id: string;
  name: string;
}

const STORAGE_KEY = "anti-internet-chat-user";

/* ---------------------------- Helpers ---------------------------- */

function generateId(): string {
  return crypto.randomUUID();
}

/* ------------------------- Identity APIs ------------------------- */

export function hasIdentity(): boolean {
  return sessionStorage.getItem(STORAGE_KEY) !== null;
}

export function getIdentity(): UserIdentity {
  const stored = sessionStorage.getItem(STORAGE_KEY);

  if (!stored) {
    throw new Error("User identity not found.");
  }

  try {
    return JSON.parse(stored) as UserIdentity;
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
    throw new Error("Invalid user identity.");
  }
}

export function setIdentity(name: string): UserIdentity {
  const identity: UserIdentity = {
    id: generateId(),
    name: name.trim(),
  };

  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(identity),
  );

  return identity;
}

export function clearIdentity() {
  sessionStorage.removeItem(STORAGE_KEY);
}