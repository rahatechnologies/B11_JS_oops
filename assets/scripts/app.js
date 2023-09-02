class Product {
  //   title = 'Default';
  //   imageUrl;
  //   description;
  //   price;

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

// const prod = new Product();
// prod.title = ""

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';

    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" />
        <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
        </div>
      </div>
      `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'data:image/jpeg;base64,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',
      19.99,
      'A soft pillow!'
    ),

    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      89.99,
      'A Carpet which might ypu like'
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for (const prod of this.products) {
      // Start Single product rendering logic
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
      //   End of single product rendering logic
      //   End of For loop
    }

    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
