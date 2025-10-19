import { users } from "./users";
import * as auth from "./auth";

export const schema = {
  users,
  ...auth,
};

export type Schema = typeof schema;

export * from "./users";
export * from "./auth";
