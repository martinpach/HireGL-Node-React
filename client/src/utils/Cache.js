export default class Cache {
    constructor(options = {}) {
        this.storage = new Map();

        if (options.invalidateAfter) {
            setInterval(this.invalidateCache.bind(this), options.invalidateAfter);
        }
    }

    invalidateCache() {
        this.storage.clear();
    }

    addToCache(key, value) {
        this.storage.set(key, value);
    }

    getFromCache(key) {
        return this.storage.get(key);
    }
};