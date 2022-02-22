

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
      // {
      //   // Match any request that starts 'https://dev-aam3gkbf.us.auth0.com/api/v2/' (note the asterisk)
      //   uri: 'https://dev-aam3gkbf.us.auth0.com/api/v2/*',
      //   tokenOptions: {
      //     // The attached token should target this audience
      //     audience: 'https://dev-aam3gkbf.us.auth0.com/api/v2/',

      //     // The attached token should have these scopes
      //     scope: 'read:current_user'
      //   }
      // },
      {
        // Match any request that starts 'https://dev-aam3gkbf.us.auth0.com/api/v2/' (note the asterisk)
        uri: 'http://localhost:3001/api/*',
        tokenOptions: {
          // The attached token should target this audience
          audience: 'https://pizza42.com',

          // The attached token should have these scopes
          scope: 'write:orders'
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
