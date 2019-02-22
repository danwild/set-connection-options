Package.describe({
	name: 'riffyn:set-connection-options',
	version: '0.0.2',
	// Brief, one-line summary of the package.
	summary: 'Set mongo connection setting ignoreUndefined to false',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/RiffynInc/set-connection-options',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.8.0.2');
	api.use('ecmascript');
	api.use('meteor');
	api.use('mongo');
	api.use('npm-mongo');
	api.mainModule('set-connection-options.js');
});

Package.onTest(function (api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('riffyn:set-connection-options');
	api.mainModule('set-connection-options-tests.js');
});
