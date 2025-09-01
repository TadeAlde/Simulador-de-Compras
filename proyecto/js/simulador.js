document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formProducto");
  const lista = document.getElementById("listaProductos");
  const vaciarBtn = document.getElementById("vaciarLista");

  
  let productos = JSON.parse(localStorage.getItem("productos")) || [];

  
  const guardarProductos = () => {
    localStorage.setItem("productos", JSON.stringify(productos));
  };

  
  const renderizarProductos = () => {
    lista.innerHTML = ""; 
    productos.forEach((prod, index) => {
      const li = document.createElement("li");
      li.textContent = `${prod.nombre} - Cantidad: ${prod.cantidad}`;

      
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.style.backgroundColor = "#dc3545";
      btnEliminar.style.color = "white";
      btnEliminar.style.border = "none";
      btnEliminar.style.padding = "5px 10px";
      btnEliminar.style.borderRadius = "4px";
      btnEliminar.style.cursor = "pointer";

      btnEliminar.addEventListener("click", () => {
        productos.splice(index, 1); 
        guardarProductos();
        renderizarProductos();
      });

      li.appendChild(btnEliminar);
      lista.appendChild(li);
    });
  };

  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if(nombre !== "" && cantidad > 0) {
      productos.push({ nombre, cantidad });
      guardarProductos();
      renderizarProductos();
      form.reset();
    }
  });

  
  vaciarBtn.addEventListener("click", () => {
    productos = [];
    guardarProductos();
    renderizarProductos();
  });

  
  renderizarProductos();
});