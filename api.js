function getProductInfo(barcode) {
    const products = {
        "8901058023787": {
            name: "Maggi 140g",
            brand: "Maggi",
            quantity: "140g",
            ingredients: "Refined wheat flour, Palm oil, Iodized salt, Masala..."
        },
        "8939115351498": {
            name: "Amul Butter 100g",
            brand: "Amul",
            quantity: "100g",
            ingredients: "Milk, Salt, Water..."
        }
    };

    if(products[barcode]) {
        return `
            <p><strong>${products[barcode].name}</strong></p>
            <p>Brand: ${products[barcode].brand}</p>
            <p>Quantity: ${products[barcode].quantity}</p>
            <p>Ingredients: ${products[barcode].ingredients}</p>
        `;
    } else {
        return <p>Product not found in database</p>;
    }
}