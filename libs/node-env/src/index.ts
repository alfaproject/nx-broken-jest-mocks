/** Environment variables overrides for easier unit testing. */
export declare const TEST_ENV_OVERRIDES: Record<string, unknown>;

export function getEnvString(name: string, defaultValue?: string): string {
    const value = process.env[name];
    if (value) {
      return value;
    }
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable '${name}' not set`);
  }
  