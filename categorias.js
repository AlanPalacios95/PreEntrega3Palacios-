const productosPorCategoria = {};

productos.forEach(producto => {
  const categoriaId = producto.categoria.id;

  if (productosPorCategoria.hasOwnProperty(categoriaId)) {
    productosPorCategoria[categoriaId].push(producto);
  } else {
    productosPorCategoria[categoriaId] = [producto];
  }
});

const productosPlaystation5 = productosPorCategoria["playstation5"];
const productosPlaystation4 = productosPorCategoria["playstation4"];
const productosNintendo = productosPorCategoria["nintendo"];
const enlacesCategorias = document.querySelectorAll(".nav2__link");

enlacesCategorias.forEach(enlace => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    enlacesCategorias.forEach(enlace => enlace.classList.remove("active"));
    e.currentTarget.classList.add("active");

    const categoriaId = e.currentTarget.id;
    const productosElegidos = productosPorCategoria[categoriaId];

    cargarProductos(productosElegidos);

    if (categoriaId !== "todos") {
      const categoriaSeleccionada = categorias.find(categoria => categoria.id === categoriaId);
      tituloPrincipal.innerText = categoriaSeleccionada.nombre;
    } else {
      tituloPrincipal.innerText = "Todos los productos";
    }
  });
});