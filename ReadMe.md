
<h4  style="text-align:center" > <font color="red">npm start</font> para levantar el servidor </h4>
<h5  style="text-align:center" > para poblar la DB como primer comando ingresar desde postman a la ruta POST: <br> <font color="blue">localhost:8080/api/products/many</font> </h5> 


---
<h3  style="text-align:center" >----> TESTING <---</h3> 
<h5  style="text-align:center" > Rutas en las que se trabajaron</h5> 
<br> 
<br>


| METODO             | RUTA | DESCRIPCION | COMMENTARIOS
| :---------------- | :------: | :------: | :------: |
| GET       |   localhost:8080/products   | se transformó en ruta privada usando middleware de chequeo de session redirecciona a login | TESTING navegador/handlebars o Postman|
| GET             |    localhost:8080//users/register    | formulario de ingreso de nuevos usuarios a la api  | ESTING navegador/handlebars o Postman |
| POST  |  localhost:8080//users/login      |  ruta de login para usuarios ya registrados | ESTING navegador/handlebars o Postman  |
| GET |  localhost:8080//users/register-github    | ruta de login utilizando estrategia github | ESTING navegador/handlebars o Postman / hay que modificar el middleware de JWT para testear la ruta |
| GET |  localhost:8080/users/register-google    | ruta de login utilizando estrategia google | ESTING navegador/handlebars o Postman / hay que modificar el middleware de JWT para testear la ruta |
| GET |  localhost:8080/user/profile    |  perfil de usuario como ruta privada donde se muestra el token | ESTING navegador/handlebars o Postman |
| POST |  localhost:8080//products/api/cart/:cid/product/:pid     | ruta de visualización de productos en carrito | TESTING navegador/handlebars o Postman |
| GET |  localhost:8080/loginError     | ruta de visualización de error de login con mensaje de error | TESTING navegador/handlebars o Postman |
| POST |  localhost:8080/users/logout     | ruta de finalizacion de session | TESTING navegador/handlebars o Postman |


<br>
<br>

