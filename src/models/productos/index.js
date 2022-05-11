class Productos {
  constructor(id, name, image, category, description, color, price) {
    this.id = id.toString();
    this.name = name;
    this.image = image;
    this.category = category;
    this.description = description;
    this.color = color;
    this.price = price;
  }
}

export default Productos;
