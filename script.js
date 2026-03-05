[7:46 pm, 05/03/2026] Abhi: const qrConfig = { 
    fps: 20, // Speed thodi badha di
    qrbox: { width: 300, height: 150 }, // Barcode hamesha rectangular (lamba) hota hai, square nahi
    aspectRatio: 1.777778, // 16:9 ratio barcode ke liye better hai
    formatsToSupport: [ 
        Html5QrcodeSupportedFormats.EAN_13, 
        Html5QrcodeSupportedFormats.EAN_8, 
        Html5QrcodeSupportedFormats.UPC_A, 
        Html5QrcodeSupportedFormats.UPC_E,
        Html5QrcodeSupportedFormats.CODE_128 
    ] 
};
[7:52 pm, 05/03/2026] Abhi: function getProductInfo(barcode) {
// Ye aapka database hai
const products = {
"8901058023787": {
name: "Maggi Noodles",
brand: "Nestle",
expiryDays: 10,
ageLimit: 5, // 5 saal se upar
weather: "Sardi/Monsoon",
safety: "Moderate (High Sodium)",
details: "Contains MSG in some variants. Not ideal for daily consumption."
},
"8901764012213": { // Example Barcode for Cold Drink
name: "Coca Cola",
brand: "Coke",
expiryDays: 45,
ageLimit: 12,
weather: "Garmi",
safety: "Unsafe for Kids (High Sugar)",
details: "High caffeine and sugar content. Avoid in Sardi (Cough risk)."
}
};

const item = products[barcode];  

if(item) {  
    // Yahan "Health Advice" ka logic hai  
    let adviceColor = item.ageLimit > 10 ? "red" : "green";  
      
    return `  
        <div style="border-left: 5px solid #3498db; padding-left: 10px;">  
            <h3 style="margin:0;">${item.name}</h3>  
            <p><strong>Brand:</strong> ${item.brand}</p>  
            <hr>  
            <p>⏳ <b>Expiry:</b> Consume within ${item.expiryDays} days.</p>  
            <p>👶 <b>Child Safety:</b> ${item.ageLimit}+ years recommended.</p>  
            <p>☀️ <b>Best Season:</b> ${item.weather} mein use karein.</p>  
            <p>⚠️ <b>Health Note:</b> <span style="color:${adviceColor}">${item.safety}</span></p>  
            <p style="font-size: 0.85rem; color: #555;"><i>Info: ${item.details}</i></p>  
        </div>  
    `;  
} else {  
    return `  
        <p style="color:red;">❌ Product Not Found!</p>  
        <p>Demo ke liye ye barcode use karein: <b>8901058023787</b></p>  
    `;  
}
}
