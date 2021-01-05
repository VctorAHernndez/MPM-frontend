import { requests } from './requests';

export function bookAppointment(body) {
  return requests.post('/appointments/', body);
}