//const precioOriginal = 100;
//const descuento = 15;




/*console.log({
    precioOriginal,
    descuento,
    porcentaPrecioConDescuento,
    PrecioConDescuento
})*/

function calcularPrecioConDescuento(precio, descuento) {
    const porcentaPrecioConDescuento = 100 - descuento; 
    const PrecioConDescuento = (precio * porcentaPrecioConDescuento) / 100;
    return PrecioConDescuento
}

function onClickButtonPriceDiscount() {

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const PrecioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const PriceP = document.getElementById("PriceP");
    PriceP.innerText = "el precio con descuento $" + PrecioConDescuento

}