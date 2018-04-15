import api from '../../lib/api';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios);
const emailAddress = 'dummy@example.com';
const breaches = ['breach1', 'breach2'];

describe('fetchBreaches()', () => {
  describe('when response is 200', () => {
    beforeEach(() => {
      mock
        .onGet(`https://haveibeenpwned.com/api/v2/breachedaccount/${emailAddress}`)
        .reply(200, breaches)
    });

    test('returns collection of found breaches', () => {
      api.fetchBreaches(emailAddress).then((response) => {
        expect(response).toEqual(breaches);
      });
    });
  });

  describe('when response is 404', () => {
    beforeEach(() => {
      mock
        .onGet(`https://haveibeenpwned.com/api/v2/breachedaccount/${emailAddress}`)
        .reply(404)
    });

    test('Returns empty collection if no breaches found', () => {
      api.fetchBreaches(emailAddress).then((response) => {
        expect(response).toEqual([]);
      });
    });
  });
});
