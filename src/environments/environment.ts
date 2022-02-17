

export let environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
