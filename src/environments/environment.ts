

export let environment = {
  production: false,
  apiUri: 'http://localhost:3001',
  auth: {
    domain: 'dev-aam3gkbf.us.auth0.com',
    clientId: 'kup0idWFmiwEAFeNbUtReI7kblEVLjzs',
    audience: 'https://pizza42.com',
    scope: 'write:orders',
    redirectUri: window.location.origin,
    errorPath: '/error'
  },
  httpInterceptor: {
    allowedList: [
      {
        uri: 'http://localhost:3001/api/*',
        tokenOptions: {
          // The attached token should target this audience
          audience: 'https://pizza42.com',

          // The attached token should have these scopes
          scope: ''
        }
      }
    ],
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
