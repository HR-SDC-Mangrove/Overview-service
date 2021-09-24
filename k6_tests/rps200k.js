/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 218,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
    },
  },
  thresholds: { http_req_duration: ['p(95)<5'] },
};

export default function rps200k() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(200001, 300000);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}
