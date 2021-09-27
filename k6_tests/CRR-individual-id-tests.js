/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  scenarios: {
    individual_constant_request_rate_id_1: {
      executor: 'constant-arrival-rate',
      exec: 'id1',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      tags: { test_type: 'individual req product id 1' },
      // tags: {indivual: 'ind1'}
    },
    individual_constant_request_rate_id_85000: {
      executor: 'constant-arrival-rate',
      exec: 'id85k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '35s',
      tags: { test_type: 'individual req product id 85000' },
    },
    individual_constant_request_rate_id_125000: {
      executor: 'constant-arrival-rate',
      exec: 'id125k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '70s',
      tags: { test_type: 'individual req product id 125000' },
    },
    individual_constant_request_rate_id_196000: {
      executor: 'constant-arrival-rate',
      exec: 'id196k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '105s',
      tags: { test_type: 'individual req product id 196000' },
    },
    individual_constant_request_rate_id_235000: {
      executor: 'constant-arrival-rate',
      exec: 'id235k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '140s',
      tags: { test_type: 'individual req product id 235000' },
    },
    individual_constant_request_rate_id_266000: {
      executor: 'constant-arrival-rate',
      exec: 'id266k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '175s',
      tags: { test_type: 'individual req product id 266000' },
    },
    individual_constant_request_rate_id_305000: {
      executor: 'constant-arrival-rate',
      exec: 'id305k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '210s',
      tags: { test_type: 'individual req product id 305000' },
    },
    individual_constant_request_rate_id_378000: {
      executor: 'constant-arrival-rate',
      exec: 'id378k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '245s',
      tags: { test_type: 'individual req product id 378000' },
    },
    individual_constant_request_rate_id_424000: {
      executor: 'constant-arrival-rate',
      exec: 'id424k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '280s',
      tags: { test_type: 'individual req product id 424000' },
    },
    individual_constant_request_rate_id_464000: {
      executor: 'constant-arrival-rate',
      exec: 'id464k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '315s',
      tags: { test_type: 'individual req product id 464000' },
    },
    individual_constant_request_rate_id_505000: {
      executor: 'constant-arrival-rate',
      exec: 'id505k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '350s',
      tags: { test_type: 'individual req product id 505000' },
    },
    individual_constant_request_rate_id_558000: {
      executor: 'constant-arrival-rate',
      exec: 'id558k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '385s',
      tags: { test_type: 'individual req product id 558000' },
    },
    individual_constant_request_rate_id_615000: {
      executor: 'constant-arrival-rate',
      exec: 'id615k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '420s',
      tags: { test_type: 'individual req product id 615000' },
    },
    individual_constant_request_rate_id_695000: {
      executor: 'constant-arrival-rate',
      exec: 'id695k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '455s',
      tags: { test_type: 'individual req product id 695000' },
    },
    individual_constant_request_rate_id_734000: {
      executor: 'constant-arrival-rate',
      exec: 'id734k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '490s',
      tags: { test_type: 'individual req product id 734000' },
    },
    individual_constant_request_rate_id_782000: {
      executor: 'constant-arrival-rate',
      exec: 'id782k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '525s',
      tags: { test_type: 'individual req product id 782000' },
    },
    individual_constant_request_rate_id_843000: {
      executor: 'constant-arrival-rate',
      exec: 'id843k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '560s',
      tags: { test_type: 'individual req product id 843000' },
    },
    individual_constant_request_rate_id_893000: {
      executor: 'constant-arrival-rate',
      exec: 'id893k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '595s',
      tags: { test_type: 'individual req product id 893000' },
    },
    individual_constant_request_rate_id_902000: {
      executor: 'constant-arrival-rate',
      exec: 'id902k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '630s',
      tags: { test_type: 'individual req product id 902000' },
    },
    individual_constant_request_rate_id_982000: {
      executor: 'constant-arrival-rate',
      exec: 'id982k',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '665s',
      tags: { test_type: 'individual req product id 982000' },
    },
    individual_constant_request_rate_id_1000011: {
      executor: 'constant-arrival-rate',
      exec: 'id1000011',
      rate: 125,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 150,
      maxVUs: 225,
      startTime: '700s',
      tags: { test_type: 'individual req product id 1000011' },
    },

  },
  thresholds: {
    'http_req_duration{test_type:individual req product id 1}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 85000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 125000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 196000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 235000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 266000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 305000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 378000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 424000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 464000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 505000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 558000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 615000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 695000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 734000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 782000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 843000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 893000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 902000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 922000}': ['p(99)<3'],
    'http_req_duration{test_type:individual req product id 1000011}': ['p(99)<3'],

    'http_req_failed{test_type:individual req product id 1}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 85000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 125000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 196000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 235000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 266000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 305000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 378000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 424000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 464000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 505000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 558000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 615000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 695000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 734000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 782000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 843000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 893000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 902000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 982000}': ['rate<0.01'],
    'http_req_failed{test_type:individual req product id 1000011}': ['rate<0.01'],
  },

};

export function id1() {
  const res = http.get(`http://localhost:3101/products/product_id=${1}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id85k() {
  const res = http.get(`http://localhost:3101/products/product_id=${85000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id125k() {
  const res = http.get(`http://localhost:3101/products/product_id=${125000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id196k() {
  const res = http.get(`http://localhost:3101/products/product_id=${196000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id235k() {
  const res = http.get(`http://localhost:3101/products/product_id=${235000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id266k() {
  const res = http.get(`http://localhost:3101/products/product_id=${266000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id305k() {
  const res = http.get(`http://localhost:3101/products/product_id=${305000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id378k() {
  const res = http.get(`http://localhost:3101/products/product_id=${378000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id424k() {
  const res = http.get(`http://localhost:3101/products/product_id=${424000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id464k() {
  const res = http.get(`http://localhost:3101/products/product_id=${464000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id505k() {
  const res = http.get(`http://localhost:3101/products/product_id=${505000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id558k() {
  const res = http.get(`http://localhost:3101/products/product_id=${558000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id615k() {
  const res = http.get(`http://localhost:3101/products/product_id=${615000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id695k() {
  const res = http.get(`http://localhost:3101/products/product_id=${695000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id734k() {
  const res = http.get(`http://localhost:3101/products/product_id=${734000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id782k() {
  const res = http.get(`http://localhost:3101/products/product_id=${782000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id843k() {
  const res = http.get(`http://localhost:3101/products/product_id=${843000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id893k() {
  const res = http.get(`http://localhost:3101/products/product_id=${893000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id902k() {
  const res = http.get(`http://localhost:3101/products/product_id=${902000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id982k() {
  const res = http.get(`http://localhost:3101/products/product_id=${982000}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

export function id1000011() {
  const res = http.get(`http://localhost:3101/products/product_id=${1000011}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}
