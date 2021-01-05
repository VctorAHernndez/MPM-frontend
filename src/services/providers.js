import { PROVIDERS_ROUTE } from '../config';
import { requests } from './requests';

export function getProviders() {
  return requests.get(PROVIDERS_ROUTE);
}

export function getProvidersByQuery(query) {
  return requests.get(PROVIDERS_ROUTE, {
    params: {
      q: query,
    }
  });
}

export function getProvidersByName(name) {
  return requests.get(PROVIDERS_ROUTE, {
    params: {
      name: name,
    }
  });
}

export function getProvidersBySpecialty(specialty) {
  return requests.get(PROVIDERS_ROUTE, {
    params: {
      specialty: specialty,
    }
  });
}

export function addProvider(body) {
  return requests.post(PROVIDERS_ROUTE, body);
}