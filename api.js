function getProductInfo(barcode) {
    const products = {
        "8901058023787": {
            name: "Maggi Noodles",
            brand: "Nestle",
            expiryDays: 10,
            ageLimit: 5,
            weather: "Sardi/Monsoon",
            safety: "Moderate (High Sodium)",
            details: "Contains MSG in some variants. Not ideal for daily consumption."
        },
        "8901764012213": {
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