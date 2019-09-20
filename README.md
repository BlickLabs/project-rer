# Instalación y despliegue

**Requisitos:**

|Paquete|Version|
|-------|-------|
|nodeJS|6.17.1|
|Git|2.23.0|
  

## Instalación de dependencia y arranque de proyecto.

Para trabajar en el proyecto de forma local se debe hacer lo siguiente:

* Tener instalado los requisitos previos (nodeJS y Git).
* Clonar el repositorio del proyecto:

    `git clone https://github.com/BlickLabs/project-rer.git`   

* Entrar al directorio del proyecto:

    `cd project-rer`

* Instalar las dependencias:

    `npm install -g yo gulp bower stylus jshint https://github.com/BlickLabs/frontend-more-generator`

    `npm install`

    `bower install`

Con esto tenemos todas las dependencias necesarias y lista para trabajar en el proyecto, para esto basta ejecutar el comando:

`gulp`

El cual ejecutara una serie de tareas para poder trabajar el proyecto en local.

    Starting server...
    Server started http://localhost:8080
    LiveReload started on port 35729
    Running server

Accedemos a la dirección [http://localhost:8080](http://localhost:8080) y mostrará el proyecto.

## Trabajando en el proyecto.

Ya lanzado el proyecto se puede ir editando o agregando secciones.

> **Importante!** Si se agregan nuevas imágenes y estas no se muestran detenga el proceso de `gulp` y vuelva a iniciarlo.
> 
Cuando termine de hacer las modificación necesarias es momento de compilar todos los archivos y mandarlos a un ambiente de pruebas.

## Desplegar proyecto a un ambiente de pruebas.

Detenga el proceso de `gulp`.

> **Importante!** Debe eliminar las carpetas `build/`, `dist/` y `.publish/` esto deberá hacer cada vez que despliegue al ambiente de
> pruebas.

Para desplegar los cambios:

    gulp --production

    gulp deploy

Terminado el proceso de estas tarea puede ver el resultado en [https://blicklabs.github.io/project-rer/](https://blicklabs.github.io/project-rer/)

## Desplegar a producción.

El ambiente de producción ya es subir los archivos minificados (imagenes, estilos CSS, script JS) y optimizados al servidor (GoDaddy, Bluehost, etc) de su preferencia.

Estos archivos los puede encontrar en [https://github.com/BlickLabs/project-rer/tree/gh-pages](https://github.com/BlickLabs/project-rer/tree/gh-pages) puede descargarlos en un .zip dando click en el botón *Clone or download*.
