import axios from 'axios';
import { getCookie } from '../utils';

export function getProviders() {
  return axios.get('/providers/');
}

export function getProvidersByQuery(query) {
  return axios.get('/providers/', {
    params: {
      q: query,
    }
  });
}

export function getProvidersByName(name) {
  return axios.get('/providers/', {
    params: {
      name: name,
    }
  });
}

export function getProvidersBySpecialty(specialty) {
  return axios.get('/providers/', {
    params: {
      specialty: specialty,
    }
  });
}

export function addProvider(body) {
  return axios({
    method: 'POST',
    url: '/providers/',
    headers: {
      'X-CSRFToken': getCookie('csrftoken'),
    },
    data: body,
  });
}