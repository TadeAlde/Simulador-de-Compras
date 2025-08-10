const DESCUENTO = 0.1; 
let productos = [];
let precios = [];

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio de " + nombre + ":"));
    
    if (!isNaN(precio) && precio > 0) {
        productos.push(nombre);
        precios.push(precio);
        console.log(`Producto agregado: ${nombre} - $${precio}`);
    } else {
        alert("Precio inválido. Intente nuevamente.");
    }
}

function calcularTotal() {
    let total = 0;
    for (let i = 0; i < precios.length; i++) {
        total += precios[i];
    }
    return total;
}

function mostrarResumen() {
    console.clear();
    console.log("=== RESUMEN DE COMPRA ===");
    for (let i = 0; i < productos.length; i++) {
        console.log(`${productos[i]} - $${precios[i]}`);
    }

    let total = calcularTotal();
    console.log("Total sin descuento: $" + total);

    if (total > 500) {
        let descuento = total * DESCUENTO;
        total -= descuento;
        console.log(`Descuento aplicado: $${descuento}`);
    }

    console.log("TOTAL A PAGAR: $" + total);
    alert("Resumen mostrado en la consola. Revísala para ver detalles.");
}

alert("Bienvenido al simulador de compras.");

do {
    agregarProducto();
} while (confirm("¿Desea agregar otro producto?"));

mostrarResumen();