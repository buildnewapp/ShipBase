import { users } from "./users";
import * as auth from "./auth";
import * as orders from "./orders";

export const schema = {
  users,
  ...auth,
  ...orders,
};

export type Schema = typeof schema;

export * from "./users";
export * from "./auth";
export * from "./orders";
