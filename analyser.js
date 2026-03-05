function showProduct(product){

let name = product.product_name || "Unknown Product";
let brand = product.brands || "Unknown Brand";
let ingredients = product.ingredients_text || "No ingredient data";

let safety = analyseFood(ingredients);

document.getElementById("productCard").innerHTML = `

<h2>${name}</h2>

<p><b>Brand:</b> ${brand}</p>

<p><b>Ingredients:</b> ${ingredients}</p>

<p><b>FoodLens AI Result:</b> ${safety}</p>

`;

}

function analyseFood(ingredients){

ingredients = ingredients.toLowerCase();

if(
ingredients.includes("palm oil") ||
ingredients.includes("preservative") ||
ingredients.includes("msg")
){

return "⚠ Moderate – Contains processed ingredients";

}

else{

return "✅ Safe food item";

}

}