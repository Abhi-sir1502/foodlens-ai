const html5QrCode = new Html5Qrcode("reader");

const qrConfig = { 
    fps: 20,
    qrbox: { width: 300, height: 150 },
    aspectRatio: 1.777778,
    formatsToSupport: [ 
        Html5QrcodeSupportedFormats.EAN_13, 
        Html5QrcodeSupportedFormats.EAN_8, 
        Html5QrcodeSupportedFormats.UPC_A, 
        Html5QrcodeSupportedFormats.UPC_E,
        Html5QrcodeSupportedFormats.CODE_128 
    ],
    experimentalFeatures: { useBarCodeDetectorIfSupported: true }
};

function startScanner() {
    html5QrCode.start(
        { facingMode: { exact: "environment" } },
        qrConfig,
        qrCodeMessage => {
            document.getElementById("barcodeResult").innerText = qrCodeMessage;
            html5QrCode.stop().then(() => {
                showProduct(qrCodeMessage);
            }).catch(err => console.warn("Stop failed", err));
        },
        errorMessage => {
            // ignore minor scan errors
        }
    ).catch(err => {
        console.error("Scanner start failed:", err);
        // fallback to front camera
        html5QrCode.start({ facingMode: "user" }, qrConfig, () => {}, () => {});
    });
}

function showProduct(barcode) {
    document.getElementById("resultBox").classList.remove("hidden");
    const info = getProductInfo(barcode);
    document.getElementById("productInfo").innerHTML = info;
}

document.getElementById("scanAgain").addEventListener("click", () => {
    document.getElementById("resultBox").classList.add("hidden");
    startScanner();
});

window.onload = startScanner;