// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by set-connection-options.js.
import { name as packageName } from "meteor/riffyn:set-connection-options";

// Write your tests here!
// Here is an example.
Tinytest.add('set-connection-options - example', function (test) {
  test.equal(packageName, "set-connection-options");
});
