# AngularWsl

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

## Procedimiento

1.- Para instalar Windows Subsystem for Linux (WSL) empezamos por abrir nuestra terminal de PowerShell como administrador y escribimos el comando de:
`wsl –install`.
Nota: Para que la terminal de WSL se abra directamente en Ubuntu podemos hacerlo con el comando de: 
`wsl --setdefault Ubuntu`.

2.- Iniciamos Ubuntu ejecutando wsl en la terminal lo cual puede solicitarte configurar un nombre de usuario y posteriormente una contraseña para el mismo por lo que es importante recordarla y/o tenerla a la mano a la hora de establecerla.

3.- Con el acceso a Ubuntu podemos ya cerrar la terminal de PowerShell y abrir la terminal de WSL que instalamos para proceder a instalar unas herramientas necesarias para nuestro proyecto. En este caso al trabajar y ocupar Angular necesitamos:
```bash
sudo apt update
sudo apt install nodejs npm
sudo npm install -g @angular/cli
```

4.- Podemos crear un proyecto en Angular en la terminal de WSL con el comando de:
`ng new angular-wsl`.
Nota: `angular-wsl` es el nombre que le asignaremos al proyecto.
IMPORTANTE: En ocasiones este comando no genera el archivo de `app.module.ts` por lo que para evitar esto se debe de usar el flag de `--no-standalone`. Por lo tanto, el comando que se utilizó para crear el proyecto fue:
`ng new angular-wsl --no-standalone`.

5.- Navegamos al directorio del proyecto con: `cd angular-wsl` y una vez dentro creamos 2 componentes. El primero simplemente imprimirá un saludo, se crea con:
`ng generate component saludo`.

6.- Posteriormente creamos el componente de la calculadora con:
`ng generate component calculadora`.

7.- Una vez codificados los componentes, hacer los imports necesarios y mandar a llamar los componentes en `app.component.html` ya se puede ejecutar nuestra aplicación, sin embargo, esto lo haremos mediante un script de bash. Lo creamos y editamos con el comando de:
`nano start.sh`
Añadimos el contenido para ejecutar la aplicación:
```bash
#!/bin/bash
cd /angular-wsl
ng serve
```
Terminando de editar guardadnos los cambios con `Ctrl + O` y confirmamos el nombre de nuestro archivo dando `Enter`. Por ultimo salimos de nano con `Ctrl + X`.

8.- Con el script listo simplemente procedemos a darle permisos de ejecución con:
`chmod +x start.sh`

9.- Finalmente ejecutamos el script con:
`./start.sh`

## Nota Importante.
Se creó un script separado para una prueba con Selenium Webdriver. Esto porque se generaban problemas en la ejecución de la aplicación debido a que surgen todavía errores para ejecutar la prueba. Por ello esta asilada en el archivo `test.sh`. 

Se sigue trabajando e investigando para eventualmente resolver este fallo en el proyecto.