async function getProductData(barcode){

let url = "https://world.openfoodfacts.org/api/v0/product/" + barcode + ".json";

let response = await fetch(url);

let data = await response.json();

if(data.status === 1){

showProduct(data.product);

}else{

document.getElementById("productCard").innerHTML =
"<h3>Product not found in database</h3>";
}

}