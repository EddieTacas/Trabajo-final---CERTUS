/* Definir función addCarrito */
function addCarrito(e) {
    /* Obtener el elemento donde se hizo el click evento */
    let elementoBoton = e.target;
    /* Obtener el elemento padre del boton */
    let elementoArticulo = elementoBoton.parentElement;
    /* Array del articulo */
    let objetoArticulo = new Array();
    /* Llenar los datos del Articulo */
    objetoArticulo.push(elementoArticulo.querySelector("h4").innerHTML);
    objetoArticulo.push(elementoArticulo.querySelector(".precioOriginal").innerHTML);
    objetoArticulo.push(elementoArticulo.querySelector(".precioDescuento").innerHTML);
    objetoArticulo.push(elementoArticulo.querySelector(".precioFinal").innerHTML);

    /* Probamos mostrando en la consola */
    let cuerpoModal = document.querySelector("#VentanaCarrito > div > div > div.modal-body");

    /* Vaciar Cuerpo de modal */
    if (cuerpoModal.querySelector("table") == null) {
        cuerpoModal.innerHTML = "";
    }

    /* Crear nuevo elemento con el contenido del articulo */
    let itemModal = document.createElement("div");
    itemModal.innerHTML = `
    <table class="table">
        <tr>
            <td>
                <h5>${objetoArticulo[0]}</h5>
                <p>Precio original: <span class="precioOriginal">${objetoArticulo[1]} </span></p>
            </td>
            <td style="min-width: 120px;">
                <p class="precioDescuento">${objetoArticulo[2]} </p>
                <p class="precioFinal"> ${objetoArticulo[3]}</p>
            </td>
        </tr>
    </table>
    `;
    /* Insertar el nuevo elemento en el cuerpo de Modal */
    cuerpoModal.append(itemModal);
    /* Mensaje informando que se agrego el producto */
    alert("Se agregó el producto al carrito");
}
/* Definir funcion Limpiar carrito */
function limpiarCarrito() {
    /* solicitar confirmacion */
    let estado = confirm("¿Estas seguro de limpiar el carrito?")
    /* si se confirmo limpiar */
    if (estado) {
        /* obtener elemento cuerpo modal */
        let cuerpoModal = document.querySelector("#VentanaCarrito > div > div > div.modal-body");
        /* reemplazar contenido */
        cuerpoModal.innerHTML = `
        <picture>
            <img id="imageCarritoVacio" class="img mx-auto d-block" src="image/recursos/CarritoVacio.png" alt="Carrito Vacio">
        </picture>
        <p class="text-center">Actualmente usted no cuenta con ningún producto. </p>    
        `;
    }
}