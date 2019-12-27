interface SyncStorageArea {
  /** @deprecated since Chrome 40. The storage.sync API no longer has a sustained write operation quota. */
  MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
  /** The maximum total amount (in bytes) of data that can be stored in sync storage, as measured by the JSON stringification of every value plus every key's length. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError. */
  QUOTA_BYTES: number;
  /** The maximum size (in bytes) of each individual item in sync storage, as measured by the JSON stringification of its value plus its key length. Updates containing items larger than this limit will fail immediately and set runtime.lastError. */
  QUOTA_BYTES_PER_ITEM: number;
  /** The maximum number of items that can be stored in sync storage. Updates that would cause this limit to be exceeded will fail immediately and set runtime.lastError. */
  MAX_ITEMS: number;
  /**
   * The maximum number of set, remove, or clear operations that can be performed each hour. This is 1 every 2 seconds, a lower ceiling than the short term higher writes-per-minute limit.
   * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
   */
  MAX_WRITE_OPERATIONS_PER_HOUR: number;
  /**
   * The maximum number of set, remove, or clear operations that can be performed each minute. This is 2 per second, providing higher throughput than writes-per-hour over a shorter period of time.
   * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
   * @since Chrome 40.
   */
  MAX_WRITE_OPERATIONS_PER_MINUTE: number;

  getBytesInUse(callback: (bytesInUse: number) => void): void;
  /**
   * Gets the amount of space (in bytes) being used by one or more items.
   * @param keys A single key or list of keys to get the total usage for. An empty list will return 0. Pass in null to get the total usage of all of storage.
   * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
   * Parameter bytesInUse: Amount of space being used in storage, in bytes.
   */
  getBytesInUse(
    keys: string | string[] | null,
    callback: (bytesInUse: number) => void
  ): void;
  /**
   * Removes all items from storage.
   * @param callback Optional.
   * Callback on success, or on failure (in which case runtime.lastError will be set).
   */
  clear(callback?: () => void): void;
  /**
   * Sets multiple items.
   * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.
   * Primitive values such as numbers will serialize as expected. Values with a typeof "object" and "function" will typically serialize to {}, with the exception of Array (serializes as expected), Date, and Regex (serialize using their String representation).
   * @param callback Optional.
   * Callback on success, or on failure (in which case runtime.lastError will be set).
   */
  set(items: Object, callback?: () => void): void;
  /**
   * Removes one or more items from storage.
   * @param keys A single key or a list of keys for items to remove.
   * @param callback Optional.
   * Callback on success, or on failure (in which case runtime.lastError will be set).
   */
  remove(keys: string | string[], callback?: () => void): void;
  /**
   * Gets one or more items from storage.
   * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
   * Parameter items: Object with items in their key-value mappings.
   */
  get(callback: (items: { [key: string]: any }) => void): void;
  /**
   * Gets one or more items from storage.
   * @param keys A single key to get, list of keys to get, or a dictionary specifying default values.
   * An empty list or object will return an empty result object. Pass in null to get the entire contents of storage.
   * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
   * Parameter items: Object with items in their key-value mappings.
   */
  get(
    keys: string | string[] | Object | null,
    callback: (items: { [key: string]: any }) => void
  ): void;
}

class MockSyncStorage implements SyncStorageArea {
  private storage: Record<string, any> = {
    rules: [
      "https?://localhost",
      "https?://127.0.0.1",
      "https?://0.0.0.0",
      "https?://192.168.\\d+.\\d+"
    ]
  };

  MAX_ITEMS: number = 999;
  MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number = 999;
  MAX_WRITE_OPERATIONS_PER_HOUR: number = 999;
  MAX_WRITE_OPERATIONS_PER_MINUTE: number = 999;
  QUOTA_BYTES: number = 999;
  QUOTA_BYTES_PER_ITEM: number = 999;

  async clear(callback?: () => void) {
    this.storage = {};

    if (callback) callback();
  }

  async get(
    key:
      | ((items: { [p: string]: any }) => void)
      | string
      | string[]
      | Object
      | null,
    callback?: (items: { [p: string]: any }) => void
  ) {
    if (key === null) return;
    else if (typeof key === "string") {
      const item = this.storage[key];
      if (item !== undefined && callback !== undefined)
        callback({ [key]: item });
    } else if (Array.isArray(key)) {
      const items = (key as string[]).reduce((acc, key) => {
        if (this.storage.hasOwnProperty(key)) {
          acc[key] = this.storage[key];
        }
        return acc;
      }, {} as Record<string, any>);

      if (callback) callback(items);
    } else {
      throw new Error(`Unsupported key: ${key}`);
    }
  }

  getBytesInUse(callback: (bytesInUse: number) => void): void;
  getBytesInUse(
    keys: string | string[] | null,
    callback: (bytesInUse: number) => void
  ): void;
  getBytesInUse(
    callback: ((bytesInUse: number) => void) | string | string[] | null,
    callback2?: (bytesInUse: number) => void
  ): void {}

  async remove(keys: string | string[], callback?: () => void) {
    if (typeof keys === "string") {
      if (this.storage.hasOwnProperty(keys)) delete this.storage[keys];
    } else {
      keys.forEach(key => {
        if (this.storage.hasOwnProperty(key)) delete this.storage[key];
      });
    }
    if (callback) callback();
  }

  async set(items: Record<string, any>, callback?: () => void) {
    Object.entries(items).forEach(([key, value]) => {
      this.storage[key] = value;
    });
    if (callback) callback();
  }
}

export default class SyncFactory {
  private static instance: SyncStorageArea =
    process.env.NODE_ENV === "production"
      ? chrome.storage.sync
      : new MockSyncStorage();

  public static getInstance(): SyncStorageArea {
    return SyncFactory.instance;
  }
}
