/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  scenarios: {
    random_between_ids_1_N_100K: {
      executor: 'constant-arrival-rate',
      exec: 'CRR100K',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 220,
      tags: { test_type: 'random ids between 1 and 100K' },
    },
    random_between_ids_100001_N_200K: {
      executor: 'constant-arrival-rate',
      exec: 'CRR200K',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 220,
      tags: { test_type: 'random ids between 100K and 200K' },
      startTime: '35s',
    },
    random_between_ids_200001_N_300K: {
      executor: 'constant-arrival-rate',
      exec: 'CRR300K',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 220,
      tags: { test_type: 'random ids between 200K and 300K' },
      startTime: '70s',
    },
    random_between_ids_300001_N_400K: {
      executor: 'constant-arrival-rate',
      exec: 'CRR400K',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 220,
      tags: { test_type: 'random ids between 300K and 400K' },
      startTime: '105s',
    },
    random_between_ids_400001_N_500K: {
      executor: 'constant-arrival-rate',
      exec: 'CRR500K',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 220,
      tags: { test_type: 'random ids between 400K and 500K' },
      startTime: '140s',
    },
    random_between_ids_500001_N_600K: {
      executor: 'constant-arrival-rate',
      exec: 'CRR600K',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 220,
      tags: { test_type: 'random ids between 500K and 600K' },
      startTime: '175s',
    },
    random_between_ids_600001_N_700K: {
      executor: 'constant-arrival-rate',
      exec: 'CRR700K',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 220,
      tags: { test_type: 'random ids between 600K and 700K' },
      startTime: '210s',
    },
    random_between_ids_700001_N_800K: {
      executor: 'constant-arrival-rate',
      exec: 'CRR800K',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 220,
      tags: { test_type: 'random ids between 700K and 800K' },
      startTime: '245s',
    },
    random_between_ids_800001_N_900K: {
      executor: 'constant-arrival-rate',
      exec: 'CRR900K',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 220,
      tags: { test_type: 'random ids between 800K and 900K' },
      startTime: '280s',
    },
    random_between_ids_900001_N_1000011: {
      executor: 'constant-arrival-rate',
      exec: 'CRR1000011',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 220,
      tags: { test_type: 'random ids between 900K and 1000K' },
      startTime: '315s',
    },
  },
  thresholds: {
    'http_req_duration{test_type:random ids between 1 and 100K}': ['p(99)<7'],
    'http_req_duration{test_type:random ids between 100K and 200K}': ['p(99)<7'],
    'http_req_duration{test_type:random ids between 200K and 300K}': ['p(99)<7'],
    'http_req_duration{test_type:random ids between 300K and 400K}': ['p(99)<7'],
    'http_req_duration{test_type:random ids between 400K and 500K}': ['p(99)<7'],
    'http_req_duration{test_type:random ids between 500K and 600K}': ['p(99)<7'],
    'http_req_duration{test_type:random ids between 600K and 700K}': ['p(99)<7'],
    'http_req_duration{test_type:random ids between 700K and 800K}': ['p(99)<7'],
    'http_req_duration{test_type:random ids between 800K and 900K}': ['p(99)<7'],
    'http_req_duration{test_type:random ids between 900K and 1000K}': ['p(99)<7'],

    'http_req_failed{test_type:random ids between 1 and 100K}': ['rate<0.01'],
    'http_req_failed{test_type:random ids between 100K and 200K}': ['rate<0.01'],
    'http_req_failed{test_type:random ids between 200K and 300K}': ['rate<0.01'],
    'http_req_failed{test_type:random ids between 300K and 400K}': ['rate<0.01'],
    'http_req_failed{test_type:random ids between 400K and 500K}': ['rate<0.01'],
    'http_req_failed{test_type:random ids between 500K and 600K}': ['rate<0.01'],
    'http_req_failed{test_type:random ids between 600K and 700K}': ['rate<0.01'],
    'http_req_failed{test_type:random ids between 700K and 800K}': ['rate<0.01'],
    'http_req_failed{test_type:random ids between 800K and 900K}': ['rate<0.01'],
    'http_req_failed{test_type:random ids between 900K and 1000K}': ['rate<0.01'],
  },
};

export function CRR100K() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(1, 100000);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function CRR200K() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(100001, 200000);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function CRR300K() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(200001, 300000);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function CRR400K() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(300001, 400000);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function CRR500K() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(400001, 500000);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function CRR600K() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(500001, 600000);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function CRR700K() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(600001, 700000);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function CRR800K() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(700001, 800000);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function CRR900K() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(800001, 900000);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function CRR1000011() {
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const id = getRandomIntInclusive(900001, 1000011);
  const res = http.get(`http://localhost:3101/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}
