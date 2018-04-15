import axios from 'axios';

const api = {
  fetchBreaches: (email) => {
    const encodedURI = window.encodeURI(
      `https://haveibeenpwned.com/api/v2/breachedaccount/${email}`
    );

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data;
      })
      .then(function (breaches) {
        return breaches;
      })
      .catch(function (error) {
        // handles 404 as success
        if (error.response.status === 404) {
          return [];
        } else {
          throw error;
        }
      });
  }
}

export default api;
