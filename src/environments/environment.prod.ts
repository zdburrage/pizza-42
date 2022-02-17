

export let environment = {
  production: true,
  apiUri: 'http://localhost:4201',
  auth: {
    domain: 'dev-aam3gkbf.us.auth0.com',
    clientId: 'kup0idWFmiwEAFeNbUtReI7kblEVLjzs',
    audience: 'https://dev-aam3gkbf.us.auth0.com/api/v2/',
    redirectUri: window.location.origin,
    errorPath: '/error'
  },
  httpInterceptor: {
    allowedList: [`http://localhost:4201/*`],
  },
};
