import axios from 'axios';
import { getCookie } from '../utils';

export function bookAppointment(body) {
  return axios({
    method: 'POST',
    url: '/appointments/',
    headers: {
      'X-CSRFToken': getCookie('csrftoken'),
    },
    data: body,
  });
}