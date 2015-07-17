// config.js holds with all config.json related logic
'use strict';
const defaultConfig = {
	appPath: Path.join(__dirname, '..'),
	autogenerated: true,
	homePlugin: 'Overview',
	pluginsPath: Path.join(__dirname, '..', 'plugins'),
	depsPath: Path.join(__dirname, '..', 'dependencies'),
	siadAddress: 'http://localhost:9980',
	siadCommand: process.platform === 'win32' ? './siad.exe' : './siad',
	zoom: 1,
};

module.exports = {
	// save() writes the current config to defaultConfigPath
	save: function(config, path) {
		Fs.writeFile(path, JSON.stringify(config, null, '\t'), function(err) {
			if (err) {
				console.log(err);
			} 
		});
	},

	// load() finds if a config file exists and uses default if not
	load: function(path, callback) {
		Fs.readFile(path, function(err, data) {
			if (err) {
				// no file found, use default config
				callback(defaultConfig);
			} else {
				// found config, use it
				callback(JSON.parse(data));
			}
		});
	},

	// reset() erases the existing config.json and places a default
	reset: function() {
		saveConfig(defaultConfig);
		callback();
	},
};
