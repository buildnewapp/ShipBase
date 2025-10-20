import { Creem } from "creem";

export class CreemClient {
  private client: Creem;
  private config: {
    apiKey: string;
  };

  constructor({
    apiKey,
    env,
  }: {
    apiKey?: string;
    env?: "test" | "production";
  }) {
    if (!apiKey) {
      apiKey = process.env.CREEM_API_KEY;
      if (!apiKey) {
        throw new Error("CREEM_API_KEY is not set");
      }
    }

    this.config = {
      apiKey,
    };

    if (!env) {
      env = process.env.CREEM_ENV as "test" | "production" | undefined;
      if (!env) {
        env = process.env.NODE_ENV === "production" ? "production" : "test";
      }
    }

    this.client = new Creem({
      serverURL:
        env === "production"
          ? "https://api.creem.io"
          : "https://test-api.creem.io",
    });
  }

  creem() {
    return this.client;
  }

  apiKey() {
    return this.config.apiKey;
  }
}

export function newCreemClient({
  apiKey,
  env,
}: {
  apiKey?: string;
  env?: "test" | "production";
} = {}): CreemClient {
  return new CreemClient({ apiKey, env });
}
