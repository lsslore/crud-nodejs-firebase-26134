# Proyecto Final - API REST con Node.js y Firebase (CRUD)

## Descripción

- Este proyecto implementa una **API REST** para la gestión de productos.  

- Permite realizar operaciones **CRUD** y cuenta con autenticación mediante **JWT**.  

- Los datos se almacenan en **Firebase Firestore**.


## Requerimiento #1: Configuración Inicial

- Crear un directorio para alojar el proyecto e incluir un archivo **index.js** como punto de entrada.

- Iniciar **Node.js** y configurar **npm** con:

`npm init -y` 

- Definir la licencia del proyecto como MIT en el package.json:
**"license": "MIT"** 

- Agregar la propiedad **"type": "module"** en el archivo package.json para habilitar **ESModules**.

- Configurar un **script** llamado **"dev": "start"** en package.json para ejecutar el programa con:

  `npm run start`

- Configurar un script adicional **"dev": "node --watch index.js"** en el package.json para levantar el servidor en modo desarrollo sin necesidad de apagarlo y prenderlo manualmente.

## Requerimiento #2: Instalación de dependencias

- Instalar las librerías necesarias:
```bash
  npm install express
  npm install cors
  npm install dotenv
  npm install firebase
  npm install jsonwebtoken
  npm install -D jest supertest
```

## Requerimiento #3: Configuración del servidor

- Crear un servidor web con **Express en index.js**.

- Configurar **CORS** para habilitar peticiones de origen cruzado.

- Usar **express.json()** como middleware global para interpretar los cuerpos en formato JSON.

- Establecer un **middleware** para manejar rutas desconocidas, devolviendo estado **404** y un  mensaje.

- Crear un archivo **.env** para alojar las variables de entorno del proyecto.

## Requerimiento #4: Rutas

- Crear la capa de rutas del proyecto.

  `products.routes.js`

- `GET /api/products` → devuelve todos los productos.

- `GET /api/products/:id` → devuelve el producto con el ID indicado.

- `POST /api/products/create` → recibe la información de un nuevo producto y lo guarda en  Firestore.

- `DELETE /api/products/:id` → elimina el producto con el ID indicado.
  `auth.routes.js`

- `POST /auth/login` → recibe credenciales de usuario y devuelve un Bearer Token si son válidas, o un error de autenticación en caso contrario.

## Requerimiento #5: Controladores y Servicios

- Crear la **capa de controladores** para cada ruta.

- Crear la **capa de servicios** para atender la lógica de cada controlador.

## Requerimiento #6: Acceso a los datos

- Crear la **capa de modelos** de la aplicación.

- Configurar un proyecto de **Firestore en Firebase** y crear la colección productos.

- Conectar **Firebase** en el proyecto y definir métodos para interactuar con la base de datos.

- Conectar los servicios con los modelos.

- Para cargar productos iniciales en la base de datos, ejecutar el siguiente comando:

`node src/seeders/productos.seeder.js`

## Requerimiento #7: Protege tus rutas

- Configurar **JWT** en el proyecto.

- Crear un **middleware de autenticación** y proteger las rutas correspondientes.

- Agregar la **lógica en el controlador de login** para validar la identidad del usuario y devolver un **Bearer Token**.

## Requerimiento #8: Testing

Se implementaron pruebas automatizadas para verificar que el proyecto cumple con todos los requerimientos solicitados.  

### Instalación de dependencias de 

Para instalar las librerías necesarias se utilizó:
```bash
npm install -D jest supertest
```

- Para ejecutar las pruebas, usar el siguiente comando:

```bash
npm test
```

## Documentación de Endpoints

### Crear Producto

**Método: POST**

- **Endpoint:** `/api/products`

- **Body:**

```json
{
  "name": "Producto 1",
  "price": 100
}
```

- **Response:**

```json
{
  "id": 1,
  "name": "Producto 1",
  "price": 100
}
```

- **Status: 201**

### Error al Crear Producto

**Método: POST**

**Endpoint:** /api/products

**Body:**

```json
{
  "name": "Producto 1"
}
```

**Response:**

```json
{
  "error": "El campo price es requerido"
}
```

- **Status: 422**

### Obtener Todos los Productos

**Método: GET**

**Endpoint:** `/api/products`

**Response:**

```json
[
  {
    "id": 1,
    "name": "Producto 1",
    "price": 100
  },
  {
    "id": 2,
    "name": "Producto 2",
    "price": 200
  }
]
```

- **Status: 200**

### Obtener Producto por ID

**Método: GET**

**Endpoint:** `/api/products/:id`

**Response:**

```json
{
  "id": 1,
  "name": "Producto 1",
  "price": 100
}
```
- **Status: 200**

### Eliminar Producto

**Método: DELETE**

**Endpoint:** `/api/products/:id`

**Response:**

```json
{
  "message": "Producto eliminado correctamente"
}
```

**Status: 200**

### Login

**Método: POST**

**Endpoint:** `/auth/login`

**Body:**

```json
{
  "username": "usuario",
  "password": "contraseña"
}
```

**Response:**

```json
{
  "token": "Bearer <jwt_token>"
}
```

**Status: 200**

## Notas

- No se utiliza **body-parser**, ya que Express maneja JSON de forma nativa con **express.json()**.

- Las rutas protegidas requieren un **Bearer Token válido** en los headers.

- El archivo **.env** debe contener las **variables de entorno** (**JWT_SECRET**, credenciales de **Firebase**, etc.) y estar en **.gitignore**.

- Se recomienda comentar el código para mayor claridad y mantener una arquitectura escalable con capas bien definidas.

Código

---

