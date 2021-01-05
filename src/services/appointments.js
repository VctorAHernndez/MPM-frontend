import { APPOINTMENTS_ROUTE } from '../config';
import { requests } from './requests';

export function bookAppointment(body) {
  return requests.post(APPOINTMENTS_ROUTE, body);
}