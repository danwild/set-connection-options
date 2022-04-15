import { Mongo } from 'meteor/mongo';

console.log('Setting Mongo connection options to {ignoreUndefined: false}');
Mongo.setConnectionOptions({ ignoreUndefined: false });
