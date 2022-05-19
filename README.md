# WELCOME TO THE BACK END EVALUATION REPOSITORY OF "JAIME AMILCAR CATARI SINSAYA"

---

[![Logo-Node-js](https://ugeek.github.io/blog/images-blog/node.png "Logo-Node-js")](http://https://ugeek.github.io/blog/images-blog/node.png "Logo-Node-js")

---

## Requerimients

- Node.js -v 16.9.1
- Express 4.18.1
- Postman
- Mongoose 6.3.3

## Installation

1. You need to have Node.js installed.
2. Clone the repository: git clone
   `https://github.com/jac9325/assesment_backEnd.git`
3. run: `npm install `(to install all necessary dependencies)
4. create a .env file in which you must enter:
   `MONGODB_URI="put your connection string here"`
   `SECRET_KEY="secret_key"`
   `PORT= using port 5000`

## Scripts

### 1. to start the project

`npm run start`

## Testing

for testing use comand :
in windows `set NODE_OPTIONS=--experimental-vm-modules && npx jes`
in linux or mac `NODE_OPTIONS=--experimental-vm-modules && npx jes`

## Postman endpoints Test

you can import the [file](htthttps://github.com/jac9325/assesment_backEnd/blob/master/api-favs.postman_collection.jsonp:// "file") in postman to test the endpoints

This project is deployed on heroku at: https://app-assesment-back.herokuapp.com/

# Questions

#### 1. Indique cuales son las partes de la siguiente url:https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone

- https: Es el protocolo utilizado para la transferencia de información. La s significa que se protege la integridad y la confidencialidad de los datos de los usuarios entre sus ordenadores y el sitio
- backend: Subdominio
- mega-app: Dominio
- .com: Dominio de orden superior
- .co: Extensión para Colombia
- 8080: Puerto
- /api/articles/: ruta
- ?docid=1020&hl=en: Parametros 'query string'
- '#dayone': etiqueta 'hashtag'

#### 2. Definir qué es una Web API, Restful y cuáles son los códigos de estado 200-, 400-, 500-

##### Web API:

Una API (Application Programming Interface ), un Web Api facilita la comunicacion entre el cliente y servidor.

##### 200:

Exito al realzar un tarea, la petición realizada por el cliente fue recibida correctamente.

##### 400:

Ocurrio un problema con la solicitud realizada.

##### 500:

Error de servidor, la solicitud fue aceptada, pero un error impidio ser procesada

#### 3. Cuando hablamos de CRUD, ¿qué significa?

Es un acronimo, (Create, Read, Update, Delete) para las maneras en las que se puede operar sobre información almacenada. Son funciones basicas para el almacenamiento persistente.
