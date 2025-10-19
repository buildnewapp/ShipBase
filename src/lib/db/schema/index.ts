import { users } from "./users";

export const schema = {
  users,
};

export type Schema = typeof schema;

export * from "./users";
