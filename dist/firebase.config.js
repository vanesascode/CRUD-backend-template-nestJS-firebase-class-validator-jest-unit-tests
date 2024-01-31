"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseDatabase = exports.app = exports.firebaseConfig = void 0;
const app_1 = require("firebase/app");
const database_1 = require("firebase/database");
exports.firebaseConfig = {
    apiKey: 'AIzaSyCSLXM28S1OISklTZaHQhVN8_nmfIHKRfc',
    authDomain: 'learning-nestjs-80fc0.firebaseapp.com',
    projectId: 'learning-nestjs-80fc0',
    storageBucket: 'learning-nestjs-80fc0.appspot.com',
    messagingSenderId: '542797643826',
    appId: '1:542797643826:web:dcf42755ffc7adf1063c2b',
};
exports.app = (0, app_1.initializeApp)(exports.firebaseConfig);
exports.firebaseDatabase = (0, database_1.getDatabase)(exports.app);
//# sourceMappingURL=firebase.config.js.map