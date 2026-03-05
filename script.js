function onScanSuccess(decodedText) {

document.getElementById("barcode").innerText =
"Barcode: " + decodedText;

getProductData(decodedText);

html5QrcodeScanner.clear();
}

let html5QrcodeScanner = new Html5QrcodeScanner(
"reader",
{
fps:10,
qrbox:250,
rememberLastUsedCamera:true
}
);

html5QrcodeScanner.render(onScanSuccess);

function scanAgain(){
location.reload();
}