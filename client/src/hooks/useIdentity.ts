import { useState } from "react";

import {
  hasIdentity,
  getIdentity,
  setIdentity,
  clearIdentity,
  type UserIdentity,
} from "../services/identity.service";

export function useIdentity() {
  const [identity, setIdentityState] = useState<UserIdentity | null>(
    hasIdentity() ? getIdentity() : null,
  );

  function createIdentity(name: string) {
    const user = setIdentity(name);
    setIdentityState(user);
  }

  function removeIdentity() {
    clearIdentity();
    setIdentityState(null);
  }

  return {
    identity,
    hasIdentity: identity !== null,
    createIdentity,
    removeIdentity,
  };
}