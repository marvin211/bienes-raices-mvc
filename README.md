# Sistema de Bienes Raíces en Node.js con Express y Pug

Este es un sistema de bienes raíces desarrollado en Node.js utilizando el framework Express y el motor de plantillas Pug. Permite a los usuarios listar, crear, editar y eliminar propiedades, así como enviar y recibir mensajes relacionados con las propiedades.

## Funcionalidades

La aplicación ofrece las siguientes funcionalidades:

- **Registro y autenticación de usuarios.
- **Listado de propiedades disponibles.
- **Búsqueda de propiedades por título.
- **Creación, edición y eliminación de propiedades (solo para usuarios autenticados).
- **Envío de mensajes relacionados con las propiedades (solo para usuarios autenticados).
- **Visualización de mensajes relacionados con una propiedad (solo para usuarios autenticados).

## Requisitos

Asegúrese de tener Node.js y npm instalados en su sistema antes de ejecutar la aplicación. También necesita una base de datos compatible con Sequelize.

## Instalación

1. Clone este repositorio en su máquina local:
    
    ```bash
    git clone https://github.com/marvin211/bienes-raices-mvc.git
    ```

2. Navegue hasta el directorio del proyecto:
    
    ```bash
    cd bienes-raices-mvc
    ```
3. Instale las dependencias del proyecto:
    
    ```bash
    npm install
    ```

4. Copie el archivo `.env.example` y renómbrelo a `.env`:
    
    ```bash
    cp .env.example .env
    ```

5. Abra el archivo `.env` y configure las variables de entorno:
    
    ```bash
    BD_USER= # Nombre de usuario de la base de datos
    BD_PASS= # Contraseña de la base de datos
    BD_NOMBRE= # Nombre de la base de datos
    DB_HOST= # Host de la base de datos
    DB_PORT= # Puerto de la base de datos
    ```
6. Ejecute las migraciones de la base de datos:
    
    ```bash
    npx sequelize-cli db:migrate
    ```

8. Inicie la aplicación:
    
    ```bash
    npm start
    ```
9. Abra su navegador y navegue hacia el puerto indicado en la variable de entorno `PORT` (por defecto: 3000).

¡Disfrute explorando y utilizando este sistema de bienes raíces en Node.js!
