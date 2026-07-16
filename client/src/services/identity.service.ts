export interface UserIdentity {
  id: string;
  name: string;
}

const STORAGE_KEY = "anti-internet-chat-user";

function generateId(): string {
  return crypto.randomUUID();
}

function generateName(id: string): string {
  return `User-${id.slice(0, 4)}`;
}

function createIdentity(): UserIdentity {
  const id = generateId();

  const identity: UserIdentity = {
    id,
    name: generateName(id),
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(identity),
  );

  return identity;
}

export function getIdentity(): UserIdentity {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return createIdentity();
  }

  try {
    return JSON.parse(stored) as UserIdentity;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return createIdentity();
  }
}