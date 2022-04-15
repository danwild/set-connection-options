# riffyn:set-connection-options

Simple Meteor Atmosphere Package to allow you to pass in additional
[connection settings](http://mongodb.github.io/node-mongodb-native/2.1/reference/connecting/connection-settings/)
to Mongo that are not supported by the
[URI Connection String](https://docs.mongodb.org/manual/reference/connection-string/) format. As
currently written, it sets `ignoreUndefined` to `false`. It could be used to set other useful things
like `ssl`, `sslCA`, `sslCert`, `connectTimeoutMS`, `authSource` etc.

## Notes

* Requires Meteor v1.4+, it uses the
[Mongo.setConnectionOptions](https://github.com/meteor/meteor/pull/7277) method (thanks [@dburles](https://github.com/dburles))

## Use

1. `meteor add riffyn:set-connection-options`
2. Open your `.meteor/packages` file, and place `riffyn:set-connection-options` at the top of the package list
(to ensure connection options are set prior to other packages using Mongo).

NB: The original package this was forked from (danwild:set-connection-options) could use an
environment variable to set multiple options. The connection option set here will not vary by
environment, and so it has been hard-coded.
