import Cache from '../../lib/Cache';

let store = {};

const configureLocalStorage = () => {
  global.localStorage = {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value;
    },
    clear: function() {
      store = {};
    }
  };
};

beforeAll(() => { configureLocalStorage(); });
beforeEach(() => { localStorage.clear(); });

test('it sets cacheKey attribute when initialised', () => {
  const cache = new Cache('foo');
  expect(cache.cacheKey).toEqual('foo');
});

describe('fetch()', () => {
  describe('when cacheKey does not exist', () => {
    test('it returns an empty object', () => {
      const cache = new Cache('foo');
      expect(cache.fetch()).toEqual({});
    });
  });

  describe('when cacheKey does exist', () => {
    test('it returns a JSON object', () => {
      const cache = new Cache('pwned');
      store = {
        pwned: JSON.stringify({bar: 'baz'})
      };

      expect(cache.fetch()).toEqual({
        bar: 'baz'
      });
    });
  });
});

describe('store()', () => {
  test('it saves given object as JSON in localStorage', () => {
    const cache = new Cache('pwned');
    const objectToStore = { dummy: 'foo' };
    cache.store(objectToStore);

    expect(cache.fetch()).toEqual({
      dummy: 'foo'
    });
  });
});
