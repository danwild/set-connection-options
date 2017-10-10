# abc-set-connection-options

Simple Meteor Atmosphere Package to allow you to pass in additional 
[connection settings](http://mongodb.github.io/node-mongodb-native/2.1/reference/connecting/connection-settings/)
 to Mongo that are not supported by the
[URI Connection String](https://docs.mongodb.org/manual/reference/connection-string/) format.

i.e. You can set useful things like `ssl`, `sslCA`, `sslCert`, `connectTimeoutMS`, `authSource` etc.

## Notes 

* Requires Meteor v1.4+, it uses the 
[Mongo.setConnectionOptions](https://github.com/meteor/meteor/pull/7277) method (thanks [@dburles](https://github.com/dburles))
* Yes, the package is prefixed with `abc` so that connection options are established prior to other packages that may
be using Mongo collections, e.g. `accounts-base`

## Use

Simply pass your settings to the env var `MONGO_CONNECTION_SETTINGS`, e.g.
 
```shell
 export MONGO_CONNECTION_OPTIONS='{ "foo": "bar" }
```

If the env var is not set on startup, the package does nothing.