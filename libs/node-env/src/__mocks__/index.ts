export const TEST_ENV_OVERRIDES: Record<string, unknown> = {};

function defaultImplementation<T>(name: string, defaultValue?: T): T {
  if (TEST_ENV_OVERRIDES[name] !== undefined) {
    return TEST_ENV_OVERRIDES[name] as T;
  }
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  throw new Error(`Environment variable '${name}' not set`);
}

export const getEnvString = jest.fn().mockImplementation(defaultImplementation);
