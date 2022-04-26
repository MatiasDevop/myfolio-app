// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hostURL:'http://localhost',
  username:'user1',
  token:'abc',
  port:8080,
  envName:'local',
  firebaseConfig: {
    apiKey: "AIzaSyAvQkJ1sAtquc2dP5Ll6wKMepJkN9_2oHc",
    authDomain: "myngsite.firebaseapp.com",
    projectId: "myngsite",
    storageBucket: "myngsite.appspot.com",
    messagingSenderId: "1005158249226",
    appId: "1:1005158249226:web:d69c2608da15eab7bcc0f3",
    measurementId: "G-EHNRMT06C3"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
