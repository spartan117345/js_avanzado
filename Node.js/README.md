## Node.js 
Es un entorno de ejecución de JavaScript del lado del servidor, de código abierto y multiplataforma. Permite utilizar JavaScript tanto en el frontend como en el backend.

## Motor V8
Node.js utiliza el motor V8 de Google Chrome, desarrollado en C++, que procesa el código JavaScript, genera una representación interna y lo compila a código de máquina para ejecutarlo eficientemente.

## Arquitectura y funcionamiento
Monohilo (Single-threaded): utiliza un hilo principal para ejecutar el código JavaScript, reduciendo el consumo de recursos.

I/O no bloqueante y asíncrono: permite realizar operaciones de archivos, bases de datos y redes sin detener la ejecución de otras tareas.

Event Loop: administra los eventos y permite ejecutar las respuestas de operaciones asíncronas cuando corresponde.

Ventaja principal: puede manejar muchas conexiones simultáneas de manera eficiente y escalable.

## Módulos y NPM
Módulos: permiten organizar el código en componentes reutilizables. Algunos módulos nativos son http, fs y path.

CommonJS: utiliza require().

ES Modules: utiliza import.

NPM: es el gestor de paquetes que permite instalar y administrar librerías y dependencias mediante package.json, almacenándolas normalmente en node_modules.

## Principales usos
Desarrollo de API REST y microservicios con Express.js o NestJS.

Aplicaciones en tiempo real, como chats y herramientas colaborativas.

Herramientas de línea de comandos (CLI) y automatización.

Sistemas de Internet de las Cosas (IoT) y chatbots.

## Adopción empresarial
Empresas como Netflix, NASA, Uber, Slack, LinkedIn e IBM utilizan Node.js en diferentes aplicaciones y servicios.

## conclusión: 
Node.js permite ejecutar JavaScript en el servidor y destaca por su arquitectura asíncrona, su capacidad para gestionar múltiples conexiones, su eficiencia en operaciones de entrada y salida (I/O) y su amplio ecosistema de paquetes mediante NPM.
Hello, World!

### En el ejemplo práctico se puede ver el funcionamiento de Node.js porque demuestra cómo el motor V8 ejecuta JavaScript directamente sobre el sistema operativo fuera del navegador web, mientras que su método server.listen() activa un proceso monohilo (single-thread) que no se detiene ni bloquea la terminal, sino que se mantiene a la espera gracias al bucle de eventos (Event Loop), de modo que cada vez que ingresas a la dirección en el navegador se genera un evento de solicitud que dispara de inmediato la función callback (req, res) para responder y cerrar la conexión de forma asíncrona y no bloqueante utilizando únicamente los módulos nativos de red de su biblioteca estándar.