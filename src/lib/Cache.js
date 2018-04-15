const isCached = (cacheKey) => {
  return !!localStorage.getItem(cacheKey);
};

class Cache {
  constructor(cacheKey) {
    this.cacheKey = cacheKey;
  }

  store(jsonValue) {
    localStorage.setItem(
      this.cacheKey,
      JSON.stringify(jsonValue)
    );
  }

  fetch() {
    if (!isCached(this.cacheKey)) return {};
    return JSON.parse(
      localStorage.getItem(this.cacheKey)
    );
  }
}

export default Cache;
