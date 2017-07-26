## Instalación via npm

`npm i cltvo-karma -D`

El comando de instalación `node ./node_modules/cltvo-karma/bin/full-install.js` se ocupa instalar todas las dependencias y los archivos automáticamente, y debe correrse desde la carpeta que tiene el `package.json` donde se instaló `cltvo-karma`

Agregar la siguiente linea al `package.json`

```
"scripts": {
	"test" : "karma start"
}
```


## Instalación manual

Descargar el repositorio, copiar los archivos y folders (specs/, karma.conf y test-context) a sus respectivos lugares, instalar cada una de las dependencias del `package.json`

Agregar la siguiente linea al `package.json`

```
"scripts": {
	"test" : "karma start"
}
```