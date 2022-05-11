class Carrito {
  constructor(id, producto_id, usuario_id, cantidad, fecha, sincronizado) {
    this.id = id.toString();
    this.producto_id = producto_id;
    this.usuario_id = usuario_id;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.sincronizado = sincronizado;
  }
}

export default Carrito;
