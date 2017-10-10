// Write your package code here!

import { Mongo } from 'meteor/mongo';
// Variables exported by this module can be imported by other packages and
// applications. See set-connection-options-tests.js for an example of importing.
export const abcSetConnectionOptions = 'set-connection-options';

if(process.env.MONGO_CONNECTION_OPTIONS){
	console.log('Using MONGO_CONNECTION_OPTIONS');
	Mongo.setConnectionOptions(JSON.parse(process.env.MONGO_CONNECTION_OPTIONS));
}
