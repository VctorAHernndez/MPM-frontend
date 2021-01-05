import axios from 'axios';
import { getCookie } from '../utils';

export const requests = axios.create({
  baseURL: 'https://mpm-django-backend.herokuapp.com',
  headers: {
    'X-CSRFToken': getCookie('csrftoken'),
  },
  timeout: 5000,
});