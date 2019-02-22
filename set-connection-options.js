// Write your package code here!

import { Mongo } from 'meteor/mongo';
// Variables exported by this module can be imported by other packages and
// applications. See set-connection-options-tests.js for an example of importing.

Mongo.setConnectionOptions({ ignoreUndefined: false });
