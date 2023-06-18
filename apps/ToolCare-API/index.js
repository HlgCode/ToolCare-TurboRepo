const { createServer } = require("./app");
// Requerimos el archivo app.js donde se encuentra la configuracion de Rutas y Middlewares
const server = createServer();
/** -------------------------------------------------------------------------------------------------------------
 * Requerimos dotenv para las variables de entorno
 */
require("dotenv").config({ path: "./.env" });
// definimos constantes de variables
const url = process.env.URL;
const puerto = process.env.PORT || 3000;
const database = process.env.DEV_DB_NAME;
/** -------------------------------------------------------------------------------------------------------------
 * Requerimos los modelos y los guardamos en la constante db con la cual tambien se pueden llamar los metodos de sequelize como sincronizar la base de datos, autenticar, etc..
 */
const db = require("./database/models");
/** -------------------------------------------------------------------------------------------------------------
Función main que inicializa Express
*/

async function main() {
  try {
    console.log(
      "--------------------[ Autenticando conexión a la base de datos " +
        database +
        " ]--------------------"
    );
    // este metodo de sequelize autentica el acceso a la base de datos.
    await db.sequelize.authenticate();

    console.log("Conexion exitosa a la base de datos: " + database);

    console.log(
      "--------------------[ Sincronizando Modelos en " +
        database +
        " ]--------------------"
    );
    // Este metodo sirve para sincronizar automaticamente los modelos.
    await db.sequelize.sync();

    console.log("Todos los modelos se sincronizaron con éxito.");

    console.log("--------------------[ Iniciando API ]--------------------");
    server.listen(puerto, function () {
      console.log("API corriendo en " + url + puerto);

      console.log(
        "--------------------[ Peticiones a la API ]--------------------"
      );
    });
  } catch (error) {
    console.log(
      "Se ha producido un error al intentar conectar a la base de datos: " +
        database,
      error
    );
  }
}

main();
