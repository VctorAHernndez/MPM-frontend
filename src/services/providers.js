import axios from 'axios';

export function getProviders() {
  return axios.get('/providers');
}

export function getProvidersByName(name) {
  return axios.get('/providers', {
    params: {
      name: name,
    }
  });
}