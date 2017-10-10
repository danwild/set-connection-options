Package.describe({
  name: 'abc-set-connection-options',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Set additional mongo connection settings (e.g. sslCert) via $MONGO_CONNECTION_OPTIONS',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.2.2');
  api.use('ecmascript');
  api.mainModule('abc-set-connection-options.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('abc-set-connection-options');
  api.mainModule('abc-set-connection-options-tests.js');
});
