import { requests } from './requests';

export function getProviders() {
  return requests.get('/providers/');
}

export function getProvidersByQuery(query) {
  return requests.get('/providers/', {
    params: {
      q: query,
    }
  });
}

export function getProvidersByName(name) {
  return requests.get('/providers/', {
    params: {
      name: name,
    }
  });
}

export function getProvidersBySpecialty(specialty) {
  return requests.get('/providers/', {
    params: {
      specialty: specialty,
    }
  });
}

export function addProvider(body) {
  return requests.post('/providers/', body);
}