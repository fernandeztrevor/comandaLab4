# TP Final La Comanda

Project Console: https://console.firebase.google.com/project/tplab4-aa5ae/overview
Hosting URL: https://tplab4-aa5ae.firebaseapp.com

**Modo de ingreso**
Para comenzar a utilizar se deberá iniciar sesión con su cuenta o bien registrarte para crear una nueva haciendo click en *registrarse*.


## Cliente


**Pantalla principal**
En la pantalla principal del cliente se podrá ver la carta y hacer el pedido seleccionando cada item que deseas agregar, los cuales se podrán filtrar para una busqueda mas rapida y sobre la izquierda iremos viendo el total de lo que se está pidiendo. Para confirmar el pedido solo bastará con hacer un click en *Ver pedido* donde se desplegará un detalle y se podrá eliminar, seguir pidiendo o confirmar el pedido.

Haciendo click en la foto del cliente se desplegará un menú donde podrá modificar su perfil, volver a pedir algo, buscar entre los pedidos pendientes y cerrar sesión.

En la opción **perfil** se podrá cambiar la foto del usuario, el nombre y apellido.

Para **buscar pedidos** apareceran en una lista los pedidos pendientes del cliente, los cuales al hacerles click mostrarán un detalle del mismo, y donde se podrá adjuntar una imagen de la mesa y cancelar el pedido. Una vez servido y pagado se podrá realizar una breve encuesta y descargar el ticket en pdf.


## Staff


**Pantalla principal**

Tanto el mozo, como los bartenders, cerveceros y cocineros verán en la pantalla principal los pedidos que tienen pendientes para su sector, donde podrán tomar acción asignandole un tiempo de preparación y entregando el pedido para que el mozo pueda servirlos.

### Mozo

El mozo tiene la particularidad de que va a poder ver el pedido de principio a fin. Cuando un cliente pide algo de la carta, un mozo se vuelve el encargado del pedido. Si bien posteriormente van a haber distintos sectores trabajando con los items del pedido (ej: cocinero, bartender, cervecero), el siempre va a estar a cargo de su pedido. Llevará el control del mismo y una vez todo lo que se pidió esté preparado, el servirá el pedido a la mesa correspondiente. Por eso mismo, el gestor de pedidos del mozo cuenta con la opción de "Servir", que se utilizará solo cuando todo lo solicitado esté cocinado y preparado. Además, se pueden ver todos los detalles del pedido cuando seleccionamos uno.

Otra de las particularidades del Mozo es que puede *gestionar el estado de las mesas* que no estén cerradas.

### Cocinero, bartender y cervecero

Estos tres roles solamente difieren en lo que preparan. Cada rol podrá ver sólo los pedidos donde tengan que trabajar. Por ejemplo, si un pedido es sólo una ensalada y un agua, el cervecero no podrá ver este pedido ya que no es de su interés.

Para gestionar los tiempos y la cocina, cada uno de estos sectores tiene acceso a todos los datos necesarios, junto con un menú para gestionar tiempos y avisar al mozo cuando algo está cocinado/preparado.
Una vez que el item seleccionado se pasa a "Listo para servir" y no queda ningún item más que le corresponda a él del pedido, se actualiza el estado para que el mozo esté informado de la situación.

Luego de que el mozo sirve el pedido, la mesa cambia de estado.


Otra funcion que se puede realizar desde el staff es el alta, baja y modificacion de productos de cada área en particular.

## Socios

En la pantalla principal de los socios se podrá descargar un PDF con la lista completa de usuarios y un archivo csv con la facturación.

El socio puede gestionar mesas como un mozo, con el agregado que éste es el unico que puede ponerlas en estado Cerrado.

También tiene la posibilidad de poder *visualizar las encuestas registradas por los clientes* de forma histórica. Cada encuesta está coloreada según el promedio de puntaje realizado sobre las cuatro categorías: el color es rojo si el promedio está por debajo del 4, el color es amarillo si es mayor o igual que 4 pero menor a 7 y por último verde, si el promedio es mayor a 7.
Al hacer click sobre una encuesta se podrá ver el promedio de los puntajes y un breve detalle.

En el menú de opciones se podrán ver estadisticas de facturacion, productos, y detalles de los movimientos que se realizaron. Todos estos cuentan con filtros para poder facilitar las búsquedas.

Al igual que el resto de los miembros del Staff los socios pueden dar de alta productos en el area que ellos crean indicada.

También podrán ver una lista completa de los empleados donde podrán editarlos, borrarlos, suspenderlos y hasta crear nuevos.
