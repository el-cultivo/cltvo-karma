#! /usr/bin/env node
const donwloadAndInstall = require('download-and-install')

donwloadAndInstall(
	'el-cultivo/cltvo-karma',
	[['specs/**', 'test/specs'], ['karma.conf.js', 'test/'], ['test-context.js', 'test']], 
	[], 
	{from_dev_dependencies: true, as_dev_dependencies: true}, 
	() => console.log(`Todo listo!!
		Sólo falta agregar la siguiente línea al package.json
		"scripts": {
			"test" : "karma start"
		}
	`)
)
