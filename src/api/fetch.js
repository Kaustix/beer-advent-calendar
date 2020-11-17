import axios from 'axios';
import settings from '@/settings';

export const initialize = () => {
  axios.defaults.headers.common.accept = 'application/json';
};

export const parseResponse = (response) => ({ ok: response.status < 400 || response.status > 499, ...response });

const getConfig = (baseURL, params) => Promise.resolve(baseURL ? { baseURL, params } : { baseURL: settings.apiUrl, params });

export const get = (resource, params, baseUrl) =>
  getConfig(baseUrl, params)
    .then(config => axios.get(resource, config))
    .then(res => parseResponse(res))
    .catch(err => parseResponse(err.response));

export const post = (resource, body, baseUrl) =>
  getConfig(baseUrl)
    .then(config => axios.post(resource, body, config))
    .then(res => parseResponse(res))
    .catch(err => parseResponse(err.response));

export const put = (resource, body, baseUrl) =>
  getConfig(baseUrl)
    .then(config => axios.put(resource, body, config))
    .then(res => parseResponse(res))
    .catch(err => parseResponse(err.response));

export const patch = (resource, body, baseUrl) =>
  getConfig(baseUrl)
    .then(config => axios.patch(resource, body, config))
    .then(res => parseResponse(res))
    .catch(err => parseResponse(err.response));

export const del = (resource, baseUrl) =>
  getConfig(baseUrl)
    .then(config => axios.delete(resource, config))
    .then(res => parseResponse(res))
    .catch(err => parseResponse(err.response));
