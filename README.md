# portfolio

Description: Angular 10 app with node JS backend

package.json:

{
  "name": "portfolio",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~10.0.3",
    "@angular/cdk": "^10.2.7",
    "@angular/common": "~10.0.3",
    "@angular/compiler": "~10.0.3",
    "@angular/core": "~10.0.3",
    "@angular/forms": "~10.0.3",
    "@angular/localize": "~10.0.3",
    "@angular/material": "^10.2.7",
    "@angular/platform-browser": "~10.0.3",
    "@angular/platform-browser-dynamic": "~10.0.3",
    "@angular/router": "~10.0.3",
    "@auth0/angular-jwt": "^5.0.1",
    "@ng-bootstrap/ng-bootstrap": "^8.0.0",
    "bcrypt": "^5.0.0",
    "body-parser": "^1.19.0",
    "bootstrap": "^4.5.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.10.15",
    "mongoose-unique-validator": "^2.0.3",
    "rxjs": "~6.5.5",
    "tslib": "^2.0.0",
    "zone.js": "~0.10.3"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.1000.2",
    "@angular/cli": "~10.0.2",
    "@angular/compiler-cli": "~10.0.3",
    "@types/node": "^12.11.1",
    "@types/jasmine": "~3.5.0",
    "@types/jasminewd2": "~2.0.3",
    "codelyzer": "^6.0.0",
    "jasmine-core": "~3.5.0",
    "jasmine-spec-reporter": "~5.0.0",
    "karma": "~5.0.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage-istanbul-reporter": "~3.0.2",
    "karma-jasmine": "~3.3.0",
    "karma-jasmine-html-reporter": "^1.5.0",
    "protractor": "~7.0.0",
    "ts-node": "~8.3.0",
    "tslint": "~6.1.0",
    "typescript": "~3.9.5"
  }
}

Todos

improve the mobile resolution
improve services code (repetition of some functions)
improvement of general css
movies module:
        - search for series and episodes feature
        - implement youtube trailers for each movie or series

separation of concerns:
          - build as many dummy components as possible to enhance apps performance
          - inplement onPush detection strategy on some components

