import axios from 'axios';
import { API_BASE_URL, REQUEST_TIMEOUT } from '../config';
import { getCookie } from '../utils';

export const requests = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-CSRFToken': getCookie('csrftoken'),
  },
  timeout: REQUEST_TIMEOUT,
});