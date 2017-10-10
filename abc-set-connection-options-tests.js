// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by abc-set-connection-options.js.
import { name as packageName } from "meteor/danwild:abc-set-connection-options";

// Write your tests here!
// Here is an example.
Tinytest.add('abc-set-connection-options - example', function (test) {
  test.equal(packageName, "abc-set-connection-options");
});
