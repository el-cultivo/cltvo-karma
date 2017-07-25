#! /usr/bin/env node
const donwloadAndInstall = require('download-and-install')

donwloadAndInstall(
	'el-cultivo/cltvo-karma',
	[
		['specs/**', '.'], 
		['installable/karma.conf.js', '.'], 
		['test-context.js', '.']
	], 
	[], 
	{from_dev_dependencies: true, as_dev_dependencies: true}, 
	() => console.log(`Todo listo!!
		Sólo falta agregar la siguiente línea al package.json
		"scripts": {
			"test" : "karma start"
		}
	`)
)
