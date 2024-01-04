# Marin Servicios

Proyecto personal construido utilizando los conocimientos adquiridos en los cursos de [HTML](https://www.udemy.com/certificate/UC-ae8c6bc0-b265-437b-8591-d0fdf8a33e2f/), [SASS](https://www.udemy.com/certificate/UC-6aa07122-883f-4e7e-9cef-b6681c336137/) y [JavaScript](https://www.udemy.com/certificate/UC-efb19ebc-7a7e-46aa-a887-f301b53883a2/).

La información en él es ficticia y algunas de las imágenes las he modificado con illustrator para que encajen mejor con la identidad de marca.

No contiene React en absoluto y me base en [7/1 PATTERN de SASS](https://sass-guidelin.es/es/) para crear las carpetas con los archivos SASS.

Es el enfoque que se le dio en el curso para escribir SASS sano, sostenible y escalable.

## Instalar dependencias

Abrir una nueva terminal en la carpeta del proyecto y correr el comando `npm i`.

## Servidor de desarrollo

Este proyecto hace uso de la extensión de VS Code llamada [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) la cual podemos descargar desde el apartado de extensiones de VS Code o con el siguiente comando de manera global desde `CMD`:
En windows:
`npm install live-server -g`
En MAC:
`sudo npm install live-server -g`

Una vez instalado de manera global live-server, ya podemos ejecutar el comando `npm start` el cual nos abrirá automáticamente una nueva ventana en el navegador por defecto que tengamos y aparte estará escuchando por cambios en cualquiera de los archivos SASS que tengamos vinculados en nuestro `main.sass`.

## Build

No hace falta realizar ningún build, pero para optimizar el código CSS resultante de compilar SASS podemos utilizar el comando `npm run build:css` que agregará prefijos de manera automática y optimizara el archivo CSS final vinculado al proyecto.
