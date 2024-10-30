import { Router } from "express";
import * as controller from "../Controller/product.controller.js"
import { passportCall } from "../middleware/passportCall.middleware.js";

const prodRoute = Router();


//pedido de productos por ID
prodRoute.get("/:pid", passportCall('jwtCookies'), controller.getProductById);

// Busqueda de Products con paginate y filtro
prodRoute.get("/", passportCall('jwtCookies'), controller.getAllProducts)

//Subida de productos
prodRoute.post("/", passportCall('jwtCookies'), controller.addProduct);

//editado de producto
prodRoute.put("/:id", passportCall('jwtCookies'), controller.updateProductbyId);

//borrado de producto
prodRoute.delete("/:id", passportCall('jwtCookies'), controller.deleteProductById);

//////////// **** comando de inicializacion de db
prodRoute.post("/many", passportCall('jwtCookies'), controller.populateDb);


export default prodRoute;
