import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';
export const requests = new Counter('http_reqs');

// you can specify stages of your test (ramp up/down patterns) through the options object
// target is the number of VUs you are aiming for

export const options = {
  stages: [
    { target: 200, duration: '1s' },
    { target: 200, duration: '1m' },
    // { target: 15, duration: '1m' },
    // { target: 0, duration: '1m' },
  ],
  thresholds: {
    http_req_duration: ['p(95)<50'],
    // requests: ['count < 100'],
    // errors: ['count<5'],
  },
};

export default function () {
  let getRandomIntInclusive =(min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // our HTTP request, note that we are saving the response to res, which can be accessed later
  let id = getRandomIntInclusive(1, 1000000)
  const res = http.get(`http://localhost:3000/products/product_id=${id}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.length > 0 === true,
  });
}

// export default function () {
//   var url = 'http://localhost:3000/products/product_id=1';
//   http.get('http://localhost:3000/products/product_id=1');

// }