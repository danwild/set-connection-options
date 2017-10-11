# danwild:set-connection-options

Simple Meteor Atmosphere Package to allow you to pass in additional 
[connection settings](http://mongodb.github.io/node-mongodb-native/2.1/reference/connecting/connection-settings/)
 to Mongo that are not supported by the
[URI Connection String](https://docs.mongodb.org/manual/reference/connection-string/) format.

i.e. You can set useful things like `ssl`, `sslCA`, `sslCert`, `connectTimeoutMS`, `authSource` etc.

## Notes 

* Requires Meteor v1.4+, it uses the 
[Mongo.setConnectionOptions](https://github.com/meteor/meteor/pull/7277) method (thanks [@dburles](https://github.com/dburles))

## Use

1. `meteor add danwild:set-connection-options`
2. Open your `.meteor/packages` file, and place `danwild:set-connection-options` at the top of the package list 
(to ensure connection options are set prior to other packages using Mongo). 
3. Simply pass your settings to the env var `MONGO_CONNECTION_SETTINGS`, e.g.
 
```shell
 export MONGO_CONNECTION_OPTIONS='{ "foo": "bar" }
```

If the env var is not set on startup, the package does nothing.