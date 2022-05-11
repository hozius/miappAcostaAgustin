class Stock {
  constructor(id, producto_id, cantidad, cantidad_minima) {
    this.id = id.toString();
    this.producto_id = producto_id;
    this.cantidad = cantidad;
    this.cantidad_minima = cantidad_minima;
  }
}

export default Stock;
