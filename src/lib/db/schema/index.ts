import { users } from "./users";
import * as auth from "./auth";
import * as orders from "./orders";
import * as blogs from "./blogs";

export const schema = {
  users,
  ...auth,
  ...orders,
  ...blogs,
};

export type Schema = typeof schema;

export * from "./users";
export * from "./auth";
export * from "./orders";
export * from "./blogs";
