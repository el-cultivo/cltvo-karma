# cltvo-karma

Éste módulo provee una instalación de Karma con Webpack/Jasmine/Istanbul para realizar tests en el Front End.

Webpack se usa para compilar cæodigo escrito e ES6.

Istanbul para estadisticas de covertura del código.

Jasmine como el proveedor de la funcionalidad de los tests.

El módulo permite realizar pruebas en los siguientes buscadores: PhantomJS (la consola), Chrome, Firefox, Safari

El módulo carga jQuery y Vue, pues es lo que usamos en El Cultivo, pero pueden eliminarse del package.json si no se necesitan (junto con las dependencias relacionadas de karma-jquery). También provee stubs (`specs/stubs/`) para mockear algunas funcionalidades que pueden venir de Materialize (el modal) y Vue (el VueHTML5Editor).

## Instalación via npm

`npm i cltvo-karma -D`

El comando de instalación `node ./node_modules/cltvo-karma/bin/full-install.js` se ocupa instalar todas las dependencias y los archivos automáticamente, y debe correrse desde la carpeta que tiene el `package.json` donde se instaló `cltvo-karma`

Agregar las siguientes lineas al `package.json` (test:full corre toda la suite en PhantomJS, Chrome, Firefox y Safari, y produce un reportaje de covertura)

```
"scripts": {
	"test" : "karma start",
	"test:full": "BROWSERS=all REPORTERS=all karma start"
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


## Uso

Los archivos de prueba deben ir en la carpeta `specs` y su nombre de terminar con `-spec.js`.

Después de la instalación correr con `npm test`

Para correr los tests en otros buscadores distintos de PhantomJS, cambiar en `karma.conf.js`:
```
browsers: [
    'PhantomJS', 
    // 'Chrome',//descomentar para correr en los buscadores
    // 'Firefox',
    // 'Safari'
],
```